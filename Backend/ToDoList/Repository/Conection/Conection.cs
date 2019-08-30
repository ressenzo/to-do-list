using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Conection
{
    public static class Conection
    {
        public static SqlConnection Conectar()
        {
            var conexao = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["sqlServer"].ConnectionString);
            return conexao;
        }
    }
}
