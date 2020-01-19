using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure
{
    public static class Connection
    {
        public static SqlConnection Conectar()
        {
            var conexao = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["sqlServer"].ConnectionString);
            return conexao;
        }
    }
}
