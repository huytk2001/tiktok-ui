import { useState, useEffect, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import HeadLessTippy from '@tippyjs/react/headless'
import SearchAcount from '../components/Header/SearchAcount';
import * as searchService from '~/api-service/searchService'

import { Wrapper as PopperWappper } from '~/Component/Popper/';
import classNames from 'classnames/bind';
import { useDebouce } from '~/hooks';
import styles from './Search.module.scss'
import { SearchIcon } from '~/Component/Icon/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const cx = classNames.bind(styles)
function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debounce = useDebouce(searchValue, 500)
    const inputRef = useRef()
    const handleChange = (e) => {
        const searchValue = e.target.value
        if (searchValue.startsWith(' ')) {
            return
        }
        setSearchValue(searchValue)
    }
    // const handleSubit = (e) => {


    // }
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([])
            return
        }
        setLoading(true)
        const fetchApi = async () => {
            setLoading(true)
            const result = await searchService.search(debounce)
            setSearchResult(result)
            setLoading(false)
        }
        fetchApi()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounce])
    const handleClear = () => {
        setSearchResult([''])
        setSearchValue('')
        inputRef.current.focus()
    }
    const handleHideResult = () => {
        setShowResult(false)
    }
    return (
        <div>
            <HeadLessTippy

                interactive
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex='-1'{...attrs}>
                        <PopperWappper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            {searchResult.map((result) => (
                                <SearchAcount key={result.id} data={result} />)

                            )}

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
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && (
                        < button className={cx('clear')} onClick={handleClear}>

                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}



                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadLessTippy >;
        </div>)
}

export default Search;