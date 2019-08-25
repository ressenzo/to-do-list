using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Api.Controllers
{
    public class AtividadeController : ApiController
    {
        List<Atividade> atividades = new List<Atividade>() {
        new Atividade { Descricao = "Atividade 1", Id = 1 },
        new Atividade { Descricao = "Atividade 2", Id = 2 } };

        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(atividades);
        }

        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            var atividade = atividades.Where(x => x.Id == id);
            return Ok(atividade);
        }
    }

    public class Atividade
    {
        public int Id { get; set; }

        public string Descricao { get; set; }
    }
}
