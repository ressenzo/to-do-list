using Dapper;
using ApplicationCore.Entities;
using ApplicationCore.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class AtividadeRepository : IAtividades
    {
        public void Alterar(Atividades atividade)
        {
            using (var conexao = Connection.Conectar())
            {
                conexao.Execute($"UPDATE Atividades SET descricao = '{atividade.Descricao}' WHERE id = {atividade.Id}");
            }
        }

        public int Cadastrar(Atividades atividade)
        {
            using (var conexao = Connection.Conectar())
            {
                return conexao.Query<int>($"INSERT INTO atividades VALUES ('{atividade.Descricao}'); SELECT id AS Id FROM Atividades WHERE id = @@Identity").FirstOrDefault();
            }
        }

        public void Deletar(int id)
        {
            using (var conexao = Connection.Conectar())
            {
                conexao.Execute($"DELETE FROM atividades WHERE id = {id}");
            }
        }

        public List<Atividades> Listar()
        {
            using (var conexao = Connection.Conectar())
            {
                return conexao.Query<Atividades>("SELECT Id as Id, Descricao As Descricao FROM atividades").ToList();
            }
        }
    }
}
