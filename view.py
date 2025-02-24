from flask import Flask, jsonify
from main import app, con

@app.route('/Usuarios', methods=['GET'])
def usuarios():
    cur = con.cursor()
    cur.execute("SELECT id_usuario, nome, email, senha, telefone, data_nascimento, multa, cargo, status FROM livros")
    livros = cur.fetchall()
    livros_dic = []

    for livros in livros:
        livros_dic.append({
            'id_livro':livros[0],
            'titulo': livros[1],
            'autor': livros[2],
            'data_publicacao': livros[3],
            'ISBN': livros[4],
            'descricao': livros[5],
            'quantidade': livros[6],
            'categoria': livros[7],
            'status': livros[8],
        })
        return jsonify(mensagem='Lista de usuarios', livros=usuarios_dic)

@app.route('/Livros', methods=['GET'])
def livros():
    cur = con.cursor()
    cur.execute("SELECT id_livro, titulo, autor, data_publicacao, ISBN, descricao, quantidade, categoria, status FROM livros")
    livros = cur.fetchall()
    livros_dic = []

    for livros in livros:
        livros_dic.append({
            'id_livro': livros[0],
            'titulo': livros[1],
            'autor': livros[2],
            'data_publicacao': livros[3],
            'ISBN': livros[4],
            'descricao': livros[5],
            'quantidade': livros[6],
            'categoria': livros[7],
            'status': livros[8],
        })
        return jsonify(mensagem='Lista de livros', livros=livros_dic)
