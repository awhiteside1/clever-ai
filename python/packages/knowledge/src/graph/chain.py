from client import db
from langchain.chains import ArangoGraphQAChain
from langchain_community.graphs import ArangoGraph
from llm import model

graph = ArangoGraph(db)

arangoChain = ArangoGraphQAChain.from_llm(model, graph=graph, verbose=True)
