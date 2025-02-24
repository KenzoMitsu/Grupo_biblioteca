from flask import Flask, jsonify
from main import app, con

@app.route('/Livros', methods=['GET'])
def livros():
    cur = con.cursor()
    cur.execute("SELECT id_livro, titulo, autor, ano_publicacao FROM livros")
    livros = cur.fetchall()
    livros_dic = []

    for livros in livros:
        livros_dic.append({
            'id_livro':livros[0],
            'titulo': livros[1],
            'autor': livros[2],
            'ano_publicacao': livros[3],
        })
        return jsonify(mensagem='Lista de livros', livros=livros_dic)