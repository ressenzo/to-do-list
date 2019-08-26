using BLL.BLLs;
using DTO.DTOs;
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
        AtividadeBll _atividade = new AtividadeBll();

        [HttpGet]
        public IHttpActionResult Get()
        {
            var atividades = _atividade.Listar();

            return Ok(atividades);
        }

        [HttpDelete]
        public IHttpActionResult Deletar(int id)
        {
            _atividade.Deletar(id);

            object confirmacao = new
            {
                resultado = true
            };

            return Ok(confirmacao);
        }

        [HttpPost]
        public IHttpActionResult Cadastrar(AtividadeDto atividade)
        {
            _atividade.Cadastrar(atividade);

            object confirmacao = new
            {
                resultado = true
            };

            return Ok(confirmacao);
        }
    }
}
