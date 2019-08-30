using DAL.DALs;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity.Entitties;

namespace BLL.BLLs
{
    public class AtividadeBll
    {
        IAtividade _atividade;

        public AtividadeBll(IAtividade atividade)
        {
            _atividade = atividade;
        }

        public void Cadastrar(AtividadeEntity atividade)
        {
            _atividade.Cadastrar(atividade);
        }
    }
}
