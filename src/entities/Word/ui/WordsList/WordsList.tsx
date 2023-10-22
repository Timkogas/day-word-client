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
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        centerMode: true,
        initialSlide: 10000,
        centerPadding: '230px'
    };

    const wordsBlocks = useMemo(() => {
        return days?.map((day) => {
            return (<WordItem date={day.day} word={day.word} key={day.word.id} />)
        })
    }, [days])

    return (
        <Slider {...settings} className={cls.slider}>
            {wordsBlocks}
        </Slider>
    )
})

export default WordsList
