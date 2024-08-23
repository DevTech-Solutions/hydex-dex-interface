import { t } from 'i18n'
import { ReactElement } from 'react'

import { ReactComponent as HydexUni } from '../../assets/svg/hydex-logo.svg'
import { SVGProps } from './UniIcon'

const MONTH_TO_HOLIDAY_UNI: { [date: string]: (props: SVGProps) => ReactElement } = {
  '12': (props) => <HydexUni title={t`Happy Holidays from the Hydex team!`} {...props} />,
  '1': (props) => <HydexUni {...props} />,
}

export default function HydexUniIcon(props: SVGProps): ReactElement | null {
  // months in javascript are 0 indexed...
  const currentMonth = `1`
  const HolidayUni = MONTH_TO_HOLIDAY_UNI[currentMonth]
  return HolidayUni ? <HolidayUni {...props} /> : null
}
