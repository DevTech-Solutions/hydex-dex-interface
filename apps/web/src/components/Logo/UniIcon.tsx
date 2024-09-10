import HydexUniIcon from "components/Logo/HydexUniIcon";

// ESLint reports `fill` is missing, whereas it exists on an SVGProps type
export type SVGProps = React.SVGProps<SVGSVGElement> & {
  fill?: string
}

export const UniIcon = (props: SVGProps) => (
  <HydexUniIcon {...props} />
)
