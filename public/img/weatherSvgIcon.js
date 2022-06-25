const weatherSvgIcon = {
    get(iconKey, option) {
        // console.log("icon 확인", iconKey)
        let data = ImageData?.[iconKey]?.(option);
        if (!data) {
            data = ImageData.blankImage();
        }
        return `data:image/svg+xml;utf8,${encodeURIComponent(data)}`;
    }
}

export default weatherSvgIcon;

const ImageData = {
    blankImage: () => (
        `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.99998" cy="8.00001" r="6.4" fill="#FFAD33"/>
        </svg>`
    ),
    iconWeather040: () => (
        `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.99998" cy="8.00001" r="6.4" fill="#FFAD33"/>
        </svg>`
    )
}