import { useQuery } from '@tanstack/react-query';
import { fetchStats } from "../../../assets/helpers/apiCalls";
import { useTranslation } from "react-i18next";
import style from './ScoreBoard.module.scss'
import Loader from '../../Loader/Loader';

const ScoreBoardPage = () => {
  const { t } = useTranslation();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['board'],
    queryFn: fetchStats,
  });

  if (isLoading) {
    return (
      <div className={ style.loaderWrap }>
        <Loader />
      </div>
    )
  }

  if (isError || !data) {
    return (
      <div className={ style.wrap }>
        <span className={ style.error }>
          { t('fetchError') }
        </span>
      </div>
    )
  }

  console.log(data)
  return (
    <div className={ style.wrap }>
      <h3 className={ style.heading }>
        { t('titleScore') }
      </h3>
      <table className={ style.table }>
        <thead>
          <tr>
            <td>
              { t('nameScore') }
            </td>
            <td>
              { t('winsScore') }
            </td>
            <td>
              { t('losesScore') }
            </td>
            <td>
              { t('tiesScore') }
            </td>
          </tr>
        </thead>
        <tbody>
          {
            data.board.map(({name, wins, loses, ties}) => (
              <tr key={ name }>
                <td>
                  { name }
                </td>
                <td>
                  { wins }
                </td>
                <td>
                  { loses }
                </td>
                <td>
                  { ties }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className={ style.weapons }>
        <span className={ style.weaponsHeading }>
          { t('titleScoreWeapons') }
        </span>
        <ul className={ style.weaponsList}>
          {
            data.weapons.map((w) => (
              <li>
                { t(w.weapon) } - { w.uses }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
};

export default ScoreBoardPage;
