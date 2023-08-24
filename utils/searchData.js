const getSearchData = (datas, searchValue) => {
    const getData = datas.filter(data => data.name.includes(searchValue))
    return getData
}

module.exports = {getSearchData}