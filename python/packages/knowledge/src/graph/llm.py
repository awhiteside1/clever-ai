from langchain_community.chat_models.ollama import ChatOllama

model = ChatOllama(model="llama3.1:70b", base_url="http://100.118.219.122:11434", temperature=0, verbose=True)
