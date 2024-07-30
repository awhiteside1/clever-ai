import lancedb
from lancedb.pydantic import LanceModel, Vector
from lancedb.embeddings import get_registry

db = lancedb.connect("/tmp/db")
func = get_registry().get("ollama").create(name="nomic-embed-text")


class Words(LanceModel):
    text: str = func.SourceField()
    vector: Vector(func.ndims()) = func.VectorField()


table = db.create_table("words", schema=Words, mode="overwrite")
table.add([
    {"text": "hello world"},
    {"text": "goodbye world"}
])

query = "greetings"
actual = table.search(query).limit(1).to_pydantic(Words)[0]
print(actual.text)
