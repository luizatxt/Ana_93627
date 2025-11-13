from flask import Flask, render_template, request, redirect, session
import mysql.connector

app = Flask(__name__)
app.secret_key = "chave-secreta"

def conectar():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="loja_virtual"
    )

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        usuario = request.form['usuario']
        senha = request.form['senha']

        con = conectar()
        cur = con.cursor()
        # Corrigido: tabela 'contas' e colunas 'nome_usuario' e 'hash_senha'
        cur.execute("SELECT * FROM contas WHERE nome_usuario=%s AND hash_senha=%s", (usuario, senha))
        user = cur.fetchone()
        con.close()

        if user:
            session['usuario'] = usuario
        else:
            return render_template('index.html', erro="Usuário ou senha incorretos!", produtos=None)

    if 'usuario' not in session:
        return render_template('index.html', produtos=None)

    con = conectar()
    cur = con.cursor()
    # Corrigido: tabela 'itens'
    cur.execute("SELECT * FROM itens")
    produtos = cur.fetchall()
    con.close()

    return render_template('index.html', produtos=produtos, usuario=session['usuario'])

@app.route('/cadastrar')
def cadastrar():
    if 'usuario' not in session:
        return redirect('/')
    return render_template('cadastrar.html')

@app.route('/salvar', methods=['POST'])
def salvar():
    if 'usuario' not in session:
        return redirect('/')

    nome = request.form['nome']
    preco = request.form['preco']
    quantidade = request.form['quantidade']

    con = conectar()
    cur = con.cursor()
    # Corrigido: tabela 'itens' e colunas 'descricao', 'valor_unitario', 'estoque'
    cur.execute("INSERT INTO itens (descricao, valor_unitario, estoque) VALUES (%s, %s, %s)", (nome, preco, quantidade))
    con.commit()
    con.close()
    return redirect('/')

@app.route('/logout')
def logout():
    session.pop('usuario', None)
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
