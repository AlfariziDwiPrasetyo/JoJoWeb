const getSearchData = (datas, searchValue) => {
    const getData = datas.filter(data => data.name.toLowerCase().includes(searchValue.toLowerCase()) || data.chapter.toLowerCase().includes(searchValue.toLowerCase()))
    return getData
}

module.exports = {getSearchData}