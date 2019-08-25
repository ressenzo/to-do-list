using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ToDoList.Controllers
{
    public class AtividadesController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Get()
        {
            var atividades = new List<Atividade>();
            atividades.Add(new Atividade { Descricao = "Atividade 1 da API", Id = 1 });
            atividades.Add(new Atividade { Descricao = "Atividade 2 da API", Id = 2 });

            return Ok(atividades);
        }
    }

    public class Atividade
    {
        public int Id { get; set; }

        public string Descricao { get; set; }
    }
}
