using Dapper;
using DTO.DTOs;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DALs
{
    public class AtividadeDal
    {
        public List<AtividadeDto> Listar()
        {
            using (var conexao = new SqlConnection(ConfigurationManager.ConnectionStrings["sqlServer"].ConnectionString))
            {
                var sql = "SELECT * FROM atividades";

                return conexao.Query<AtividadeDto>(sql).ToList();
            }
        }

        public void Deletar(int id)
        {
            using (var conexao = new SqlConnection(ConfigurationManager.ConnectionStrings["sqlServer"].ConnectionString))
            {
                var sql = $"DELETE FROM atividades WHERE id = {id}";

                conexao.Execute(sql);
            }
        }

        public void Cadastrar(AtividadeDto atividade)
        {
            using (var conexao = new SqlConnection(ConfigurationManager.ConnectionStrings["sqlServer"].ConnectionString))
            {
                var sql = $"INSERT INTO Atividades VALUES ('{atividade.Descricao}')";

                conexao.Execute(sql);
            }
        }
    }
}
