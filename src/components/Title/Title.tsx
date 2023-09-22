import { TitleProps } from "./Title.props";
import { cn } from "@/lib/utils"

export const Title = ({ tag, children, size = "m", className }: TitleProps): JSX.Element => {
    let classSize = 'text-2xl font-semibold tablet:text-3xl leptop:text-4xl desktop:text-[40px] desktop:leading-tight';

    switch (size) {
        case 's':
            classSize = 'text-xl font-medium tablet:text-2xl leptop:text-4xl'
            break;
        case 'l':
            classSize = 'text-3xl font-bold tablet:text-5xl desktop:text-6xl'
            break;

        default:
            break;
    }

    switch (tag) {
        case 'h1':
            return <h1 className={cn(classSize, className)}>{children}</h1>;
        case 'h2':
            return <h2 className={cn(classSize, className)}>{children}</h2>;
        case 'h3':
            return <h3 className={cn(classSize, className)}>{children}</h3>;
        default:
            return <></>
    }

}