import { memo, useMemo, type FC } from 'react'
import cls from './WordsList.module.scss'
import WordItem from '../WordItem/WordItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IDay } from '../../model/types/day';

interface WordsListProps {
    className?: string
    words: IDay[]
}

export const WordsList: FC<WordsListProps> = memo((props: WordsListProps) => {
    const { words } = props


    const settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "90px",
        adaptiveHeight: true,
    };

    const wordsBlocks = useMemo(() => {
        return words?.map((word) => {
            return (<WordItem word = { word.words } key = { word.words.id } />)
        })
    }, [words])

    return (
        <Slider {...settings} className={cls.slider}>
            {wordsBlocks}
        </Slider>
    )
})

export default WordsList
