import { useState, useEffect, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import HeadLessTippy from '@tippyjs/react/headless'
import SearchAcount from '../components/Header/SearchAcount';
import { Wrapper as PopperWappper } from '~/Component/Popper/';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { SearchIcon } from '~/Component/Icon/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const cx = classNames.bind(styles)
function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const inputRef = useRef()
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 0)
    }, [])
    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }
    const handleHideResult = () => {
        setShowResult(false)
    }
    return (<HeadLessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={attrs => (
            <div className={cx('search-result')} tabIndex='-1'{...attrs}>
                <PopperWappper>
                    <h4 className={cx('search-title')}>
                        Accounts
                    </h4>
                    <SearchAcount />
                    <SearchAcount />
                    <SearchAcount />

                </PopperWappper>
            </div>

        )}
        onClickOutside={handleHideResult}
    >
        <div className={cx('search')}>
            <input
                ref={inputRef}
                placeholder="Tìm Kiếm"
                value={searchValue}
                spellCheck={false}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}
            />
            {!!searchValue && (
                < button className={cx('clear')} onClick={handleClear}>

                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            )}

            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}


            <button className={cx('search-btn')}>
                <SearchIcon />
            </button>
        </div>
    </HeadLessTippy >);
}

export default Search;