from arango import ArangoClient

client = ArangoClient(hosts="http://localhost:8529")

# sys_db = client.db('_system', username='root', password='openSesame')
# sys_db.create_database('test')
# Connect to "test" database as root user.
db = client.db("_system", username="root", password="openSesame")
