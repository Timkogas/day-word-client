import { memo, useMemo, type FC } from 'react'
import cls from './WordsList.module.scss'
import { IWord } from '../../model/types/word'
import WordItem from '../WordItem/WordItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface WordsListProps {
    className?: string
    words: IWord[]
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
        return words.map((word) => {
            return (<WordItem word = { word } key = { word.id } />)
        })
    }, [words])

    return (
        <Slider {...settings} className={cls.slider}>
            {wordsBlocks}
        </Slider>
    )
})

export default WordsList
