import Date from "../../atoms/Date";
import Description from "../../atoms/Description";
import Title from "../../atoms/Title";

interface HeaderProps{
    title: string,
    description: string,
    date: string,
}

export default function HeaderS({date,description,title}: HeaderProps) {
    return (
        <>
            <Title title={title} />
            <Description description={description} />
            <Date date={date} />
        </>
    )
}