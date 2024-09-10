import { ReactComponent as HydexUni } from 'assets/svg/hydex-logo.svg'
import { SVGProps } from 'components/Logo/UniIcon'
import { ReactElement } from 'react'
import { t } from 'uniswap/src/i18n'

const MONTH_TO_HOLIDAY_UNI: { [date: string]: (props: SVGProps) => ReactElement } = {
  '12': (props) => <HydexUni title={t('common.happyHolidays')} {...props} />,
  '1': (props) => <HydexUni {...props} />,
}

export default function HydexUniIcon(props: SVGProps): ReactElement | null {
  // months in javascript are 0 indexed...
  const currentMonth = `1`
  const HolidayUni = MONTH_TO_HOLIDAY_UNI[currentMonth]
  return HolidayUni ? <HolidayUni {...props} /> : null
}

