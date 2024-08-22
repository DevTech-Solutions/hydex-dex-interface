// ESLint reports `fill` is missing, whereas it exists on an SVGProps type
import HolidayUniIcon from "./HolidayUniIcon";

export type SVGProps = React.SVGProps<SVGSVGElement> & {
  fill?: string
}

export const UniIcon = (props: SVGProps) => (
  <HolidayUniIcon {...props} />
)
