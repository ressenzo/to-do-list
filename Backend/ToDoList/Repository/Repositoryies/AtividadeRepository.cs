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
        public void Cadastrar(AtividadeEntity atividade)
        {
            using (var conexao = Conection.Conection.Conectar())
            {
                conexao.Query($"INSERT INTO atividades VALUES ('{atividade.Descricao}')");
            }
        }

        public void Deletar(int id)
        {
            using (var conexao = Conection.Conection.Conectar())
            {
                conexao.Query($"DELETE FROM atividades WHERE id = {id}");
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
