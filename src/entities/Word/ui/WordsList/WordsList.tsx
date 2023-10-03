import { memo, useMemo, type FC } from 'react'
import cls from './WordsList.module.scss'
import WordItem from '../WordItem/WordItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IDay } from '../../model/types/day';

interface WordsListProps {
    className?: string
    days: IDay[]
}

export const WordsList: FC<WordsListProps> = memo((props: WordsListProps) => {
    const { days } = props


    const settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const wordsBlocks = useMemo(() => {
        return days?.map((day) => {
            return (<WordItem word = { day.word } key = { day.word.id } />)
        })
    }, [days])

    return (
        <Slider {...settings} className={cls.slider}>
            {wordsBlocks}
        </Slider>
    )
})

export default WordsList
