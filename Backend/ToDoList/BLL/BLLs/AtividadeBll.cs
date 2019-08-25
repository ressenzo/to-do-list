using BLL.Interfaces;
using DAL.DALs;
using DTO.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.BLLs
{
    public class AtividadeBll : IAtividade
    {
        AtividadeDal _atividade = new AtividadeDal();

        public void Deletar(int id)
        {
            _atividade.Deletar(id);
        }

        public List<AtividadeDto> Listar()
        {
            return _atividade.Listar();
        }
    }
}
