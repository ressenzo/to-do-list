using Dapper;
using Entity.Entitties;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Repositoryies
{
    public class AtividadeRepository : IAtividade
    {
        public int Cadastrar(AtividadeEntity atividade)
        {
            using (var conexao = Conection.Conection.Conectar())
            {
                return conexao.Query<int>($"INSERT INTO atividades VALUES ('{atividade.Descricao}'); SELECT id AS Id FROM Atividades WHERE id = @@Identity").FirstOrDefault();
            }
        }

        public void Deletar(int id)
        {
            using (var conexao = Conection.Conection.Conectar())
            {
                conexao.Execute($"DELETE FROM atividades WHERE id = {id}");
            }
        }

        public List<AtividadeEntity> Listar()
        {
            using (var conexao = Conection.Conection.Conectar())
            {
                return conexao.Query<AtividadeEntity>("SELECT Id as Id, Descricao As Descricao FROM atividades").ToList();
            }
        }
    }
}
