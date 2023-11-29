import { DateNews } from "./styles";

interface DateProps{
    date: string,
}


export default function Date({date} : DateProps) {
    return(
        <DateNews>
            {date}
        </DateNews>
    )
}