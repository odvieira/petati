import json
from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    # Retrieve group data from database [TO DO]
    # 
    groups_data = pd.read_csv("./data.csv")

    result = []

    for g in groups_data.iterrows():
        g_data = g[1].to_dict()
        new_result = {}

        new_result['id'] = g[0]

        new_result["nome"] = str(g_data['Nome'])
        new_result["universidade"] = str(g_data['Universidade'])
        new_result["campus"] = str(g_data['Campus'])
        new_result["cidade"] = str(g_data['Cidade'])
        new_result["email"] = str(g_data['Email'])
        new_result["site"] = str(g_data['Site'])
        new_result["eixo"] = str(g_data['Eixo'])
        new_result["temática"] = str(g_data['Temática'])
        new_result["anocriacao"] = str(g_data['Ano de criação'])
        new_result["instagram"] = str(g_data['Instagram'])
        new_result["facebook"] = str(g_data['Facebook'])
        new_result["twitter"] = str(g_data['Twitter'])
        new_result["youtube"] = str(g_data['YouTube'])
        new_result["saibamais"] = str(g_data['Contato1'])
        new_result["estado"] = str(g_data['Estado'])
        new_result["siteInstitucional"] = str(g_data['Site na instituição'])
        
        result.append(new_result)

    return jsonify(result)

def main():
    app.run()

if __name__ == "__main__":
    main()