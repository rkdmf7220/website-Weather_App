const weatherSvgIcon = {
    get(iconKey, option) {
        // console.log("icon 확인", iconKey)
        let data = ImageData[iconKey](option);
        if (!data) {
            data = ImageData.blankImage();
        }
        return `'data:image/svg+xml;utf8,${encodeURIComponent(data)}'`;
    }
}

export default weatherSvgIcon;

const ImageData = {
    blankImage: () => (
        `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.99998" cy="8.00001" r="6.4" fill="#FFAD33"/>
        </svg>`
    ),
    iconWeather010: () => {
      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="url(#paint0_linear_323_769)"/>
            <defs>
            <linearGradient id="paint0_linear_323_769" x1="8.81818" y1="2" x2="16.5455" y2="22" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFAD33"/>
            <stop offset="0.9999" stop-color="#FF8F20"/>
            <stop offset="1" stop-color="#FFAD33" stop-opacity="0"/>
            </linearGradient>
            </defs>
        </svg>`
    },
    iconWeather030: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="11" r="6" fill="url(#paint0_linear_323_781)"/>
            <path d="M8 14H15.5C17.433 14 19 15.567 19 17.5V17.5C19 19.433 17.433 21 15.5 21H8V14Z" fill="url(#paint1_radial_323_781)"/>
            <circle cx="8" cy="15" r="6" fill="#E9ECF0"/>
            <defs>
            <linearGradient id="paint0_linear_323_781" x1="12.0909" y1="5" x2="16.7273" y2="17" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFAD33"/>
            <stop offset="0.9999" stop-color="#FF8F20"/>
            <stop offset="1" stop-color="#FFAD33" stop-opacity="0"/>
            </linearGradient>
            <radialGradient id="paint1_radial_323_781" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.8077 16.9167) rotate(41.4715) scale(7.34033 10.5305)">
            <stop offset="0.229167" stop-color="#C2C9D3"/>
            <stop offset="1" stop-color="#E8EDF3"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather031: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6H17.5C19.9853 6 22 8.01472 22 10.5V10.5C22 12.9853 19.9853 15 17.5 15H9V6Z" fill="url(#paint0_radial_323_805)"/>
            <circle cx="9" cy="8" r="7" fill="#E9ECF0"/>
            <rect x="6.86658" y="16" width="1.31987" height="2.63975" rx="0.659937" transform="rotate(45 6.86658 16)" fill="#71A5FA"/>
            <rect x="10.5997" y="16" width="1.31987" height="6.59937" rx="0.659937" transform="rotate(45 10.5997 16)" fill="#71A5FA"/>
            <rect x="14.3329" y="16" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 14.3329 16)" fill="#71A5FA"/>
            <rect x="18.066" y="16" width="1.31987" height="1.31987" rx="0.659937" transform="rotate(45 18.066 16)" fill="#71A5FA"/>
            <rect x="16.1993" y="17.8667" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 16.1993 17.8667)" fill="#71A5FA"/>
            <defs>
            <radialGradient id="paint0_radial_323_805" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.5 9.75) rotate(43.8767) scale(9.01734 13.0251)">
            <stop offset="0.203125" stop-color="#C2C9D3"/>
            <stop offset="1" stop-color="#E8EDF3"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather032: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9845 16C11.4108 16 11.7563 16.31 11.7563 16.6923L11.7563 17.8089L12.8421 17.2466C13.2113 17.0554 13.6833 17.1689 13.8965 17.5C14.1096 17.8311 13.9831 18.2545 13.614 18.4457L12.5436 19L13.614 19.5543C13.9831 19.7455 14.1096 20.1689 13.8965 20.5C13.6833 20.8311 13.2113 20.9446 12.8421 20.7534L11.7563 20.1911V21.3077C11.7563 21.69 11.4108 22 10.9845 22C10.5582 22 10.2127 21.69 10.2127 21.3077L10.2127 20.2071L9.15786 20.7534C8.7887 20.9446 8.31667 20.8311 8.10353 20.5C7.8904 20.1689 8.01688 19.7455 8.38604 19.5543L9.45636 19L8.38604 18.4457C8.01688 18.2545 7.8904 17.8311 8.10353 17.5C8.31667 17.1689 8.7887 17.0554 9.15786 17.2466L10.2127 17.7929L10.2127 16.6923C10.2127 16.31 10.5582 16 10.9845 16Z" fill="#86B3FF"/>
            <path d="M9 6H17.5C19.9853 6 22 8.01472 22 10.5V10.5C22 12.9853 19.9853 15 17.5 15H9V6Z" fill="url(#paint0_radial_323_830)"/>
            <circle cx="9" cy="8" r="7" fill="#E9ECF0"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4758 16.7115C16.4758 16.2937 16.8444 16 17.2404 16C17.6363 16 18.0049 16.2937 18.0049 16.7115V17.0449L18.3638 16.8591C18.7145 16.6775 19.1741 16.7763 19.3919 17.1147C19.6216 17.4716 19.472 17.9141 19.1083 18.1025L18.8234 18.25L19.1083 18.3975C19.472 18.5859 19.6216 19.0284 19.3919 19.3853C19.1741 19.7237 18.7145 19.8225 18.3638 19.6409L18.0049 19.4551V19.7885C18.0049 20.2063 17.6363 20.5 17.2404 20.5C16.8444 20.5 16.4758 20.2063 16.4758 19.7885V19.4658L16.1376 19.6409C15.7869 19.8225 15.3273 19.7237 15.1095 19.3853C14.8798 19.0284 15.0294 18.5859 15.3931 18.3975L15.678 18.25L15.3931 18.1025C15.0294 17.9141 14.8798 17.4716 15.1095 17.1147C15.3273 16.7763 15.7869 16.6775 16.1376 16.8591L16.4758 17.0342V16.7115Z" fill="#7BABFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.83786 16.4221C4.94971 16.1555 5.22914 16 5.49449 16C5.76047 16 6.04059 16.1563 6.15192 16.424C6.42535 16.3717 6.72706 16.4739 6.89313 16.7322C7.06037 16.9922 7.01899 17.2909 6.85444 17.5C7.01899 17.7091 7.06037 18.0078 6.89313 18.2678C6.72706 18.5261 6.42535 18.6283 6.15191 18.576C6.04059 18.8437 5.76047 19 5.49449 19C5.22914 19 4.9497 18.8445 4.83786 18.5779C4.56715 18.6257 4.27087 18.5228 4.10687 18.2678C3.93963 18.0078 3.98101 17.7091 4.14556 17.5C3.98101 17.2909 3.93963 16.9922 4.10687 16.7322C4.27087 16.4772 4.56715 16.3743 4.83786 16.4221Z" fill="#97C0FF"/>
            <defs>
            <radialGradient id="paint0_radial_323_830" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.5 9.75) rotate(43.8767) scale(9.01734 13.0251)">
            <stop offset="0.203125" stop-color="#C2C9D3"/>
            <stop offset="1" stop-color="#E8EDF3"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather033: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6H17.5C19.9853 6 22 8.01472 22 10.5V10.5C22 12.9853 19.9853 15 17.5 15H9V6Z" fill="url(#paint0_radial_323_851)"/>
            <circle cx="9" cy="8" r="7" fill="#E9ECF0"/>
            <rect x="5" y="15.7" width="1.31987" height="2.63975" rx="0.659937" fill="#71A5FA"/>
            <rect x="9.64001" y="16" width="1.31987" height="6" rx="0.659937" fill="#71A5FA"/>
            <rect x="7.31982" y="16.2" width="1.31987" height="3.75" rx="0.659937" fill="#71A5FA"/>
            <rect x="7.31995" y="20.3596" width="1.31987" height="1.31987" rx="0.659937" fill="#71A5FA"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4758 17.7115C13.4758 17.2937 13.8444 17 14.2404 17C14.6363 17 15.0049 17.2937 15.0049 17.7115V18.0449L15.3638 17.8591C15.7145 17.6775 16.1741 17.7763 16.3919 18.1147C16.6216 18.4716 16.472 18.9141 16.1083 19.1025L15.8234 19.25L16.1083 19.3975C16.472 19.5859 16.6216 20.0284 16.3919 20.3853C16.1741 20.7237 15.7145 20.8225 15.3638 20.6409L15.0049 20.4551V20.7885C15.0049 21.2063 14.6363 21.5 14.2404 21.5C13.8444 21.5 13.4758 21.2063 13.4758 20.7885V20.4658L13.1376 20.6409C12.7869 20.8225 12.3273 20.7237 12.1095 20.3853C11.8798 20.0284 12.0294 19.5859 12.3931 19.3975L12.678 19.25L12.3931 19.1025C12.0294 18.9141 11.8798 18.4716 12.1095 18.1147C12.3273 17.7763 12.7869 17.6775 13.1376 17.8591L13.4758 18.0342V17.7115Z" fill="#86B3FF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8379 16.4221C17.9497 16.1555 18.2291 16 18.4945 16C18.7605 16 19.0406 16.1563 19.1519 16.424C19.4254 16.3717 19.7271 16.4739 19.8931 16.7322C20.0604 16.9922 20.019 17.2909 19.8544 17.5C20.019 17.7091 20.0604 18.0078 19.8931 18.2678C19.7271 18.5261 19.4254 18.6283 19.1519 18.576C19.0406 18.8437 18.7605 19 18.4945 19C18.2291 19 17.9497 18.8445 17.8379 18.5779C17.5672 18.6257 17.2709 18.5228 17.1069 18.2678C16.9396 18.0078 16.981 17.7091 17.1456 17.5C16.981 17.2909 16.9396 16.9922 17.1069 16.7322C17.2709 16.4772 17.5672 16.3743 17.8379 16.4221Z" fill="#A1C5FC"/>
            <defs>
            <radialGradient id="paint0_radial_323_851" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.5 9.75) rotate(43.8767) scale(9.01734 13.0251)">
            <stop offset="0.203125" stop-color="#C2C9D3"/>
            <stop offset="1" stop-color="#E8EDF3"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather034: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6H17.5C19.9853 6 22 8.01472 22 10.5V10.5C22 12.9853 19.9853 15 17.5 15H9V6Z" fill="url(#paint0_radial_323_805)"/>
            <circle cx="9" cy="8" r="7" fill="#E9ECF0"/>
            <rect x="6.86658" y="16" width="1.31987" height="2.63975" rx="0.659937" transform="rotate(45 6.86658 16)" fill="#71A5FA"/>
            <rect x="10.5997" y="16" width="1.31987" height="6.59937" rx="0.659937" transform="rotate(45 10.5997 16)" fill="#71A5FA"/>
            <rect x="14.3329" y="16" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 14.3329 16)" fill="#71A5FA"/>
            <rect x="18.066" y="16" width="1.31987" height="1.31987" rx="0.659937" transform="rotate(45 18.066 16)" fill="#71A5FA"/>
            <rect x="16.1993" y="17.8667" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 16.1993 17.8667)" fill="#71A5FA"/>
            <defs>
            <radialGradient id="paint0_radial_323_805" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.5 9.75) rotate(43.8767) scale(9.01734 13.0251)">
            <stop offset="0.203125" stop-color="#C2C9D3"/>
            <stop offset="1" stop-color="#E8EDF3"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather040: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 12H19C20.6569 12 22 13.3431 22 15V15C22 16.6569 20.6569 18 19 18H13V12Z" fill="url(#paint0_radial_323_797)"/>
            <path d="M2 14C2 11.7909 3.79086 10 6 10H13V18H6C3.79086 18 2 16.2091 2 14V14Z" fill="url(#paint1_radial_323_797)"/>
            <circle cx="13" cy="12" r="6" fill="#AFB6C0"/>
            <defs>
            <radialGradient id="paint0_radial_323_797" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 12) rotate(45) scale(11.3137 16.9706)">
            <stop offset="0.192708" stop-color="#676B73"/>
            <stop offset="0.916667" stop-color="#B9C0CD"/>
            </radialGradient>
            <radialGradient id="paint1_radial_323_797" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 10) rotate(139.635) scale(13.1244 18.0461)">
            <stop offset="0.34375" stop-color="#989DA3"/>
            <stop offset="0.885417" stop-color="#AFB6C0"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather041: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 9H19C20.6569 9 22 10.3431 22 12V12C22 13.6569 20.6569 15 19 15H13V9Z" fill="url(#paint0_radial_323_817)"/>
            <path d="M2 11C2 8.79086 3.79086 7 6 7H13V15H6C3.79086 15 2 13.2091 2 11V11Z" fill="url(#paint1_radial_323_817)"/>
            <circle cx="13" cy="9" r="6" fill="#AFB6C0"/>
            <rect x="6.86658" y="16" width="1.31987" height="2.63975" rx="0.659937" transform="rotate(45 6.86658 16)" fill="#71A5FA"/>
            <rect x="10.5997" y="16" width="1.31987" height="6.59937" rx="0.659937" transform="rotate(45 10.5997 16)" fill="#71A5FA"/>
            <rect x="14.3329" y="16" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 14.3329 16)" fill="#71A5FA"/>
            <rect x="18.066" y="16" width="1.31987" height="1.31987" rx="0.659937" transform="rotate(45 18.066 16)" fill="#71A5FA"/>
            <rect x="16.1993" y="17.8667" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 16.1993 17.8667)" fill="#71A5FA"/>
            <defs>
            <radialGradient id="paint0_radial_323_817" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 9) rotate(45) scale(11.3137 16.9706)">
            <stop offset="0.192708" stop-color="#676B73"/>
            <stop offset="0.916667" stop-color="#B9C0CD"/>
            </radialGradient>
            <radialGradient id="paint1_radial_323_817" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 7) rotate(139.635) scale(13.1244 18.0461)">
            <stop offset="0.34375" stop-color="#989DA3"/>
            <stop offset="0.885417" stop-color="#AFB6C0"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather042: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 9H19C20.6569 9 22 10.3431 22 12V12C22 13.6569 20.6569 15 19 15H13V9Z" fill="url(#paint0_radial_323_840)"/>
            <path d="M2 11C2 8.79086 3.79086 7 6 7H13V15H6C3.79086 15 2 13.2091 2 11V11Z" fill="url(#paint1_radial_323_840)"/>
            <circle cx="13" cy="9" r="6" fill="#AFB6C0"/>
            <path d="M10.9845 16C11.4108 16 11.7563 16.31 11.7563 16.6923L11.7563 17.8089L12.8421 17.2466C13.2113 17.0554 13.6833 17.1689 13.8965 17.5C14.1096 17.8311 13.9831 18.2545 13.614 18.4457L12.5436 19L13.614 19.5543C13.9831 19.7455 14.1096 20.1689 13.8965 20.5C13.6833 20.8311 13.2113 20.9446 12.8421 20.7534L11.7563 20.1911V21.3077C11.7563 21.69 11.4108 22 10.9845 22C10.5582 22 10.2127 21.69 10.2127 21.3077L10.2127 20.2071L9.15786 20.7534C8.7887 20.9446 8.31667 20.8311 8.10353 20.5C7.8904 20.1689 8.01688 19.7455 8.38604 19.5543L9.45636 19L8.38604 18.4457C8.01688 18.2545 7.8904 17.8311 8.10353 17.5C8.31667 17.1689 8.7887 17.0554 9.15786 17.2466L10.2127 17.7929L10.2127 16.6923C10.2127 16.31 10.5582 16 10.9845 16Z" fill="#86B3FF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4758 16.7115C16.4758 16.2937 16.8444 16 17.2404 16C17.6363 16 18.0049 16.2937 18.0049 16.7115V17.0449L18.3638 16.8591C18.7145 16.6775 19.1741 16.7763 19.3919 17.1147C19.6216 17.4716 19.472 17.9141 19.1083 18.1025L18.8234 18.25L19.1083 18.3975C19.472 18.5859 19.6216 19.0284 19.3919 19.3853C19.1741 19.7237 18.7145 19.8225 18.3638 19.6409L18.0049 19.4551V19.7885C18.0049 20.2063 17.6363 20.5 17.2404 20.5C16.8444 20.5 16.4758 20.2063 16.4758 19.7885V19.4658L16.1376 19.6409C15.7869 19.8225 15.3273 19.7237 15.1095 19.3853C14.8798 19.0284 15.0294 18.5859 15.3931 18.3975L15.678 18.25L15.3931 18.1025C15.0294 17.9141 14.8798 17.4716 15.1095 17.1147C15.3273 16.7763 15.7869 16.6775 16.1376 16.8591L16.4758 17.0342V16.7115Z" fill="#7BABFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.83786 16.4221C4.94971 16.1555 5.22914 16 5.49449 16C5.76047 16 6.04059 16.1563 6.15192 16.424C6.42535 16.3717 6.72706 16.4739 6.89313 16.7322C7.06037 16.9922 7.01899 17.2909 6.85444 17.5C7.01899 17.7091 7.06037 18.0078 6.89313 18.2678C6.72706 18.5261 6.42535 18.6283 6.15191 18.576C6.04059 18.8437 5.76047 19 5.49449 19C5.22914 19 4.9497 18.8445 4.83786 18.5779C4.56715 18.6257 4.27087 18.5228 4.10687 18.2678C3.93963 18.0078 3.98101 17.7091 4.14556 17.5C3.98101 17.2909 3.93963 16.9922 4.10687 16.7322C4.27087 16.4772 4.56715 16.3743 4.83786 16.4221Z" fill="#97C0FF"/>
            <defs>
            <radialGradient id="paint0_radial_323_840" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 9) rotate(45) scale(11.3137 16.9706)">
            <stop offset="0.192708" stop-color="#676B73"/>
            <stop offset="0.916667" stop-color="#B9C0CD"/>
            </radialGradient>
            <radialGradient id="paint1_radial_323_840" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 7) rotate(139.635) scale(13.1244 18.0461)">
            <stop offset="0.34375" stop-color="#989DA3"/>
            <stop offset="0.885417" stop-color="#AFB6C0"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather043: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 9H19C20.6569 9 22 10.3431 22 12V12C22 13.6569 20.6569 15 19 15H13V9Z" fill="url(#paint0_radial_323_864)"/>
            <path d="M2 11C2 8.79086 3.79086 7 6 7H13V15H6C3.79086 15 2 13.2091 2 11V11Z" fill="url(#paint1_radial_323_864)"/>
            <circle cx="13" cy="9" r="6" fill="#AFB6C0"/>
            <rect x="5" y="16" width="1.31987" height="2.63975" rx="0.659937" fill="#71A5FA"/>
            <rect x="9.64001" y="16" width="1.31987" height="6" rx="0.659937" fill="#71A5FA"/>
            <rect x="7.31982" y="16.2" width="1.31987" height="3.75" rx="0.659937" fill="#71A5FA"/>
            <rect x="7.31995" y="20.3596" width="1.31987" height="1.31987" rx="0.659937" fill="#71A5FA"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4758 17.7115C13.4758 17.2937 13.8444 17 14.2404 17C14.6363 17 15.0049 17.2937 15.0049 17.7115V18.0449L15.3638 17.8591C15.7145 17.6775 16.1741 17.7763 16.3919 18.1147C16.6216 18.4716 16.472 18.9141 16.1083 19.1025L15.8234 19.25L16.1083 19.3975C16.472 19.5859 16.6216 20.0284 16.3919 20.3853C16.1741 20.7237 15.7145 20.8225 15.3638 20.6409L15.0049 20.4551V20.7885C15.0049 21.2063 14.6363 21.5 14.2404 21.5C13.8444 21.5 13.4758 21.2063 13.4758 20.7885V20.4658L13.1376 20.6409C12.7869 20.8225 12.3273 20.7237 12.1095 20.3853C11.8798 20.0284 12.0294 19.5859 12.3931 19.3975L12.678 19.25L12.3931 19.1025C12.0294 18.9141 11.8798 18.4716 12.1095 18.1147C12.3273 17.7763 12.7869 17.6775 13.1376 17.8591L13.4758 18.0342V17.7115Z" fill="#86B3FF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8379 16.4221C17.9497 16.1555 18.2291 16 18.4945 16C18.7605 16 19.0406 16.1563 19.1519 16.424C19.4254 16.3717 19.7271 16.4739 19.8931 16.7322C20.0604 16.9922 20.019 17.2909 19.8544 17.5C20.019 17.7091 20.0604 18.0078 19.8931 18.2678C19.7271 18.5261 19.4254 18.6283 19.1519 18.576C19.0406 18.8437 18.7605 19 18.4945 19C18.2291 19 17.9497 18.8445 17.8379 18.5779C17.5672 18.6257 17.2709 18.5228 17.1069 18.2678C16.9396 18.0078 16.981 17.7091 17.1456 17.5C16.981 17.2909 16.9396 16.9922 17.1069 16.7322C17.2709 16.4772 17.5672 16.3743 17.8379 16.4221Z" fill="#A1C5FC"/>
            <defs>
            <radialGradient id="paint0_radial_323_864" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 9) rotate(45) scale(11.3137 16.9706)">
            <stop offset="0.192708" stop-color="#676B73"/>
            <stop offset="0.916667" stop-color="#B9C0CD"/>
            </radialGradient>
            <radialGradient id="paint1_radial_323_864" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 7) rotate(139.635) scale(13.1244 18.0461)">
            <stop offset="0.34375" stop-color="#989DA3"/>
            <stop offset="0.885417" stop-color="#AFB6C0"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather044: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 9H19C20.6569 9 22 10.3431 22 12V12C22 13.6569 20.6569 15 19 15H13V9Z" fill="url(#paint0_radial_323_817)"/>
            <path d="M2 11C2 8.79086 3.79086 7 6 7H13V15H6C3.79086 15 2 13.2091 2 11V11Z" fill="url(#paint1_radial_323_817)"/>
            <circle cx="13" cy="9" r="6" fill="#AFB6C0"/>
            <rect x="6.86658" y="16" width="1.31987" height="2.63975" rx="0.659937" transform="rotate(45 6.86658 16)" fill="#71A5FA"/>
            <rect x="10.5997" y="16" width="1.31987" height="6.59937" rx="0.659937" transform="rotate(45 10.5997 16)" fill="#71A5FA"/>
            <rect x="14.3329" y="16" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 14.3329 16)" fill="#71A5FA"/>
            <rect x="18.066" y="16" width="1.31987" height="1.31987" rx="0.659937" transform="rotate(45 18.066 16)" fill="#71A5FA"/>
            <rect x="16.1993" y="17.8667" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 16.1993 17.8667)" fill="#71A5FA"/>
            <defs>
            <radialGradient id="paint0_radial_323_817" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 9) rotate(45) scale(11.3137 16.9706)">
            <stop offset="0.192708" stop-color="#676B73"/>
            <stop offset="0.916667" stop-color="#B9C0CD"/>
            </radialGradient>
            <radialGradient id="paint1_radial_323_817" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 7) rotate(139.635) scale(13.1244 18.0461)">
            <stop offset="0.34375" stop-color="#989DA3"/>
            <stop offset="0.885417" stop-color="#AFB6C0"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather110: () => {
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 15.5234C21.795 15.9598 20.495 16.1977 19.1394 16.1977C12.8781 16.1977 7.80229 11.1219 7.80229 4.86058C7.80229 3.50499 8.04022 2.20497 8.47657 1C4.1159 2.57914 1 6.75712 1 11.6629C1 17.9242 6.07582 23 12.3371 23C17.2429 23 21.4209 19.8841 23 15.5234Z" fill="url(#paint0_linear_323_775)"/>
            <defs>
            <linearGradient id="paint0_linear_323_775" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
            <stop stop-color="#85B6FD"/>
            <stop offset="1" stop-color="#769CFF"/>
            </linearGradient>
            </defs>
        </svg>`
    },
    iconWeather130: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.582C21.288 11.8399 20.5198 11.9805 19.7188 11.9805C16.0189 11.9805 13.0195 8.98113 13.0195 5.28125C13.0195 4.48022 13.1601 3.71203 13.418 3C10.8412 3.93313 9 6.40194 9 9.30078C9 13.0007 11.9993 16 15.6992 16C18.5981 16 21.0669 14.1588 22 11.582Z" fill="url(#paint0_linear_323_789)"/>
            <path d="M8 14H15.5C17.433 14 19 15.567 19 17.5V17.5C19 19.433 17.433 21 15.5 21H8V14Z" fill="url(#paint1_radial_323_789)"/>
            <circle cx="8" cy="15" r="6" fill="#E9ECF0"/>
            <defs>
            <linearGradient id="paint0_linear_323_789" x1="15.5" y1="3" x2="15.5" y2="16" gradientUnits="userSpaceOnUse">
            <stop stop-color="#85B6FD"/>
            <stop offset="1" stop-color="#769CFF"/>
            </linearGradient>
            <radialGradient id="paint1_radial_323_789" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.8077 16.9167) rotate(41.4715) scale(7.34033 10.5305)">
            <stop offset="0.203125" stop-color="#C2C9D3"/>
            <stop offset="1" stop-color="#E8EDF3"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather131: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6H17.5C19.9853 6 22 8.01472 22 10.5V10.5C22 12.9853 19.9853 15 17.5 15H9V6Z" fill="url(#paint0_radial_323_805)"/>
            <circle cx="9" cy="8" r="7" fill="#E9ECF0"/>
            <rect x="6.86658" y="16" width="1.31987" height="2.63975" rx="0.659937" transform="rotate(45 6.86658 16)" fill="#71A5FA"/>
            <rect x="10.5997" y="16" width="1.31987" height="6.59937" rx="0.659937" transform="rotate(45 10.5997 16)" fill="#71A5FA"/>
            <rect x="14.3329" y="16" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 14.3329 16)" fill="#71A5FA"/>
            <rect x="18.066" y="16" width="1.31987" height="1.31987" rx="0.659937" transform="rotate(45 18.066 16)" fill="#71A5FA"/>
            <rect x="16.1993" y="17.8667" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 16.1993 17.8667)" fill="#71A5FA"/>
            <defs>
            <radialGradient id="paint0_radial_323_805" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.5 9.75) rotate(43.8767) scale(9.01734 13.0251)">
            <stop offset="0.203125" stop-color="#C2C9D3"/>
            <stop offset="1" stop-color="#E8EDF3"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather132: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9845 16C11.4108 16 11.7563 16.31 11.7563 16.6923L11.7563 17.8089L12.8421 17.2466C13.2113 17.0554 13.6833 17.1689 13.8965 17.5C14.1096 17.8311 13.9831 18.2545 13.614 18.4457L12.5436 19L13.614 19.5543C13.9831 19.7455 14.1096 20.1689 13.8965 20.5C13.6833 20.8311 13.2113 20.9446 12.8421 20.7534L11.7563 20.1911V21.3077C11.7563 21.69 11.4108 22 10.9845 22C10.5582 22 10.2127 21.69 10.2127 21.3077L10.2127 20.2071L9.15786 20.7534C8.7887 20.9446 8.31667 20.8311 8.10353 20.5C7.8904 20.1689 8.01688 19.7455 8.38604 19.5543L9.45636 19L8.38604 18.4457C8.01688 18.2545 7.8904 17.8311 8.10353 17.5C8.31667 17.1689 8.7887 17.0554 9.15786 17.2466L10.2127 17.7929L10.2127 16.6923C10.2127 16.31 10.5582 16 10.9845 16Z" fill="#86B3FF"/>
            <path d="M9 6H17.5C19.9853 6 22 8.01472 22 10.5V10.5C22 12.9853 19.9853 15 17.5 15H9V6Z" fill="url(#paint0_radial_323_830)"/>
            <circle cx="9" cy="8" r="7" fill="#E9ECF0"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4758 16.7115C16.4758 16.2937 16.8444 16 17.2404 16C17.6363 16 18.0049 16.2937 18.0049 16.7115V17.0449L18.3638 16.8591C18.7145 16.6775 19.1741 16.7763 19.3919 17.1147C19.6216 17.4716 19.472 17.9141 19.1083 18.1025L18.8234 18.25L19.1083 18.3975C19.472 18.5859 19.6216 19.0284 19.3919 19.3853C19.1741 19.7237 18.7145 19.8225 18.3638 19.6409L18.0049 19.4551V19.7885C18.0049 20.2063 17.6363 20.5 17.2404 20.5C16.8444 20.5 16.4758 20.2063 16.4758 19.7885V19.4658L16.1376 19.6409C15.7869 19.8225 15.3273 19.7237 15.1095 19.3853C14.8798 19.0284 15.0294 18.5859 15.3931 18.3975L15.678 18.25L15.3931 18.1025C15.0294 17.9141 14.8798 17.4716 15.1095 17.1147C15.3273 16.7763 15.7869 16.6775 16.1376 16.8591L16.4758 17.0342V16.7115Z" fill="#7BABFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.83786 16.4221C4.94971 16.1555 5.22914 16 5.49449 16C5.76047 16 6.04059 16.1563 6.15192 16.424C6.42535 16.3717 6.72706 16.4739 6.89313 16.7322C7.06037 16.9922 7.01899 17.2909 6.85444 17.5C7.01899 17.7091 7.06037 18.0078 6.89313 18.2678C6.72706 18.5261 6.42535 18.6283 6.15191 18.576C6.04059 18.8437 5.76047 19 5.49449 19C5.22914 19 4.9497 18.8445 4.83786 18.5779C4.56715 18.6257 4.27087 18.5228 4.10687 18.2678C3.93963 18.0078 3.98101 17.7091 4.14556 17.5C3.98101 17.2909 3.93963 16.9922 4.10687 16.7322C4.27087 16.4772 4.56715 16.3743 4.83786 16.4221Z" fill="#97C0FF"/>
            <defs>
            <radialGradient id="paint0_radial_323_830" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.5 9.75) rotate(43.8767) scale(9.01734 13.0251)">
            <stop offset="0.203125" stop-color="#C2C9D3"/>
            <stop offset="1" stop-color="#E8EDF3"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather133: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6H17.5C19.9853 6 22 8.01472 22 10.5V10.5C22 12.9853 19.9853 15 17.5 15H9V6Z" fill="url(#paint0_radial_323_851)"/>
            <circle cx="9" cy="8" r="7" fill="#E9ECF0"/>
            <rect x="5" y="15.7" width="1.31987" height="2.63975" rx="0.659937" fill="#71A5FA"/>
            <rect x="9.64001" y="16" width="1.31987" height="6" rx="0.659937" fill="#71A5FA"/>
            <rect x="7.31982" y="16.2" width="1.31987" height="3.75" rx="0.659937" fill="#71A5FA"/>
            <rect x="7.31995" y="20.3596" width="1.31987" height="1.31987" rx="0.659937" fill="#71A5FA"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4758 17.7115C13.4758 17.2937 13.8444 17 14.2404 17C14.6363 17 15.0049 17.2937 15.0049 17.7115V18.0449L15.3638 17.8591C15.7145 17.6775 16.1741 17.7763 16.3919 18.1147C16.6216 18.4716 16.472 18.9141 16.1083 19.1025L15.8234 19.25L16.1083 19.3975C16.472 19.5859 16.6216 20.0284 16.3919 20.3853C16.1741 20.7237 15.7145 20.8225 15.3638 20.6409L15.0049 20.4551V20.7885C15.0049 21.2063 14.6363 21.5 14.2404 21.5C13.8444 21.5 13.4758 21.2063 13.4758 20.7885V20.4658L13.1376 20.6409C12.7869 20.8225 12.3273 20.7237 12.1095 20.3853C11.8798 20.0284 12.0294 19.5859 12.3931 19.3975L12.678 19.25L12.3931 19.1025C12.0294 18.9141 11.8798 18.4716 12.1095 18.1147C12.3273 17.7763 12.7869 17.6775 13.1376 17.8591L13.4758 18.0342V17.7115Z" fill="#86B3FF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8379 16.4221C17.9497 16.1555 18.2291 16 18.4945 16C18.7605 16 19.0406 16.1563 19.1519 16.424C19.4254 16.3717 19.7271 16.4739 19.8931 16.7322C20.0604 16.9922 20.019 17.2909 19.8544 17.5C20.019 17.7091 20.0604 18.0078 19.8931 18.2678C19.7271 18.5261 19.4254 18.6283 19.1519 18.576C19.0406 18.8437 18.7605 19 18.4945 19C18.2291 19 17.9497 18.8445 17.8379 18.5779C17.5672 18.6257 17.2709 18.5228 17.1069 18.2678C16.9396 18.0078 16.981 17.7091 17.1456 17.5C16.981 17.2909 16.9396 16.9922 17.1069 16.7322C17.2709 16.4772 17.5672 16.3743 17.8379 16.4221Z" fill="#A1C5FC"/>
            <defs>
            <radialGradient id="paint0_radial_323_851" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.5 9.75) rotate(43.8767) scale(9.01734 13.0251)">
            <stop offset="0.203125" stop-color="#C2C9D3"/>
            <stop offset="1" stop-color="#E8EDF3"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather134: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6H17.5C19.9853 6 22 8.01472 22 10.5V10.5C22 12.9853 19.9853 15 17.5 15H9V6Z" fill="url(#paint0_radial_323_805)"/>
            <circle cx="9" cy="8" r="7" fill="#E9ECF0"/>
            <rect x="6.86658" y="16" width="1.31987" height="2.63975" rx="0.659937" transform="rotate(45 6.86658 16)" fill="#71A5FA"/>
            <rect x="10.5997" y="16" width="1.31987" height="6.59937" rx="0.659937" transform="rotate(45 10.5997 16)" fill="#71A5FA"/>
            <rect x="14.3329" y="16" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 14.3329 16)" fill="#71A5FA"/>
            <rect x="18.066" y="16" width="1.31987" height="1.31987" rx="0.659937" transform="rotate(45 18.066 16)" fill="#71A5FA"/>
            <rect x="16.1993" y="17.8667" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 16.1993 17.8667)" fill="#71A5FA"/>
            <defs>
            <radialGradient id="paint0_radial_323_805" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.5 9.75) rotate(43.8767) scale(9.01734 13.0251)">
            <stop offset="0.203125" stop-color="#C2C9D3"/>
            <stop offset="1" stop-color="#E8EDF3"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather140: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 12H19C20.6569 12 22 13.3431 22 15V15C22 16.6569 20.6569 18 19 18H13V12Z" fill="url(#paint0_radial_323_797)"/>
            <path d="M2 14C2 11.7909 3.79086 10 6 10H13V18H6C3.79086 18 2 16.2091 2 14V14Z" fill="url(#paint1_radial_323_797)"/>
            <circle cx="13" cy="12" r="6" fill="#AFB6C0"/>
            <defs>
            <radialGradient id="paint0_radial_323_797" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 12) rotate(45) scale(11.3137 16.9706)">
            <stop offset="0.192708" stop-color="#676B73"/>
            <stop offset="0.916667" stop-color="#B9C0CD"/>
            </radialGradient>
            <radialGradient id="paint1_radial_323_797" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 10) rotate(139.635) scale(13.1244 18.0461)">
            <stop offset="0.34375" stop-color="#989DA3"/>
            <stop offset="0.885417" stop-color="#AFB6C0"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather141: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 9H19C20.6569 9 22 10.3431 22 12V12C22 13.6569 20.6569 15 19 15H13V9Z" fill="url(#paint0_radial_323_817)"/>
            <path d="M2 11C2 8.79086 3.79086 7 6 7H13V15H6C3.79086 15 2 13.2091 2 11V11Z" fill="url(#paint1_radial_323_817)"/>
            <circle cx="13" cy="9" r="6" fill="#AFB6C0"/>
            <rect x="6.86658" y="16" width="1.31987" height="2.63975" rx="0.659937" transform="rotate(45 6.86658 16)" fill="#71A5FA"/>
            <rect x="10.5997" y="16" width="1.31987" height="6.59937" rx="0.659937" transform="rotate(45 10.5997 16)" fill="#71A5FA"/>
            <rect x="14.3329" y="16" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 14.3329 16)" fill="#71A5FA"/>
            <rect x="18.066" y="16" width="1.31987" height="1.31987" rx="0.659937" transform="rotate(45 18.066 16)" fill="#71A5FA"/>
            <rect x="16.1993" y="17.8667" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 16.1993 17.8667)" fill="#71A5FA"/>
            <defs>
            <radialGradient id="paint0_radial_323_817" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 9) rotate(45) scale(11.3137 16.9706)">
            <stop offset="0.192708" stop-color="#676B73"/>
            <stop offset="0.916667" stop-color="#B9C0CD"/>
            </radialGradient>
            <radialGradient id="paint1_radial_323_817" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 7) rotate(139.635) scale(13.1244 18.0461)">
            <stop offset="0.34375" stop-color="#989DA3"/>
            <stop offset="0.885417" stop-color="#AFB6C0"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather142: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 9H19C20.6569 9 22 10.3431 22 12V12C22 13.6569 20.6569 15 19 15H13V9Z" fill="url(#paint0_radial_323_840)"/>
            <path d="M2 11C2 8.79086 3.79086 7 6 7H13V15H6C3.79086 15 2 13.2091 2 11V11Z" fill="url(#paint1_radial_323_840)"/>
            <circle cx="13" cy="9" r="6" fill="#AFB6C0"/>
            <path d="M10.9845 16C11.4108 16 11.7563 16.31 11.7563 16.6923L11.7563 17.8089L12.8421 17.2466C13.2113 17.0554 13.6833 17.1689 13.8965 17.5C14.1096 17.8311 13.9831 18.2545 13.614 18.4457L12.5436 19L13.614 19.5543C13.9831 19.7455 14.1096 20.1689 13.8965 20.5C13.6833 20.8311 13.2113 20.9446 12.8421 20.7534L11.7563 20.1911V21.3077C11.7563 21.69 11.4108 22 10.9845 22C10.5582 22 10.2127 21.69 10.2127 21.3077L10.2127 20.2071L9.15786 20.7534C8.7887 20.9446 8.31667 20.8311 8.10353 20.5C7.8904 20.1689 8.01688 19.7455 8.38604 19.5543L9.45636 19L8.38604 18.4457C8.01688 18.2545 7.8904 17.8311 8.10353 17.5C8.31667 17.1689 8.7887 17.0554 9.15786 17.2466L10.2127 17.7929L10.2127 16.6923C10.2127 16.31 10.5582 16 10.9845 16Z" fill="#86B3FF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4758 16.7115C16.4758 16.2937 16.8444 16 17.2404 16C17.6363 16 18.0049 16.2937 18.0049 16.7115V17.0449L18.3638 16.8591C18.7145 16.6775 19.1741 16.7763 19.3919 17.1147C19.6216 17.4716 19.472 17.9141 19.1083 18.1025L18.8234 18.25L19.1083 18.3975C19.472 18.5859 19.6216 19.0284 19.3919 19.3853C19.1741 19.7237 18.7145 19.8225 18.3638 19.6409L18.0049 19.4551V19.7885C18.0049 20.2063 17.6363 20.5 17.2404 20.5C16.8444 20.5 16.4758 20.2063 16.4758 19.7885V19.4658L16.1376 19.6409C15.7869 19.8225 15.3273 19.7237 15.1095 19.3853C14.8798 19.0284 15.0294 18.5859 15.3931 18.3975L15.678 18.25L15.3931 18.1025C15.0294 17.9141 14.8798 17.4716 15.1095 17.1147C15.3273 16.7763 15.7869 16.6775 16.1376 16.8591L16.4758 17.0342V16.7115Z" fill="#7BABFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.83786 16.4221C4.94971 16.1555 5.22914 16 5.49449 16C5.76047 16 6.04059 16.1563 6.15192 16.424C6.42535 16.3717 6.72706 16.4739 6.89313 16.7322C7.06037 16.9922 7.01899 17.2909 6.85444 17.5C7.01899 17.7091 7.06037 18.0078 6.89313 18.2678C6.72706 18.5261 6.42535 18.6283 6.15191 18.576C6.04059 18.8437 5.76047 19 5.49449 19C5.22914 19 4.9497 18.8445 4.83786 18.5779C4.56715 18.6257 4.27087 18.5228 4.10687 18.2678C3.93963 18.0078 3.98101 17.7091 4.14556 17.5C3.98101 17.2909 3.93963 16.9922 4.10687 16.7322C4.27087 16.4772 4.56715 16.3743 4.83786 16.4221Z" fill="#97C0FF"/>
            <defs>
            <radialGradient id="paint0_radial_323_840" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 9) rotate(45) scale(11.3137 16.9706)">
            <stop offset="0.192708" stop-color="#676B73"/>
            <stop offset="0.916667" stop-color="#B9C0CD"/>
            </radialGradient>
            <radialGradient id="paint1_radial_323_840" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 7) rotate(139.635) scale(13.1244 18.0461)">
            <stop offset="0.34375" stop-color="#989DA3"/>
            <stop offset="0.885417" stop-color="#AFB6C0"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather143: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 9H19C20.6569 9 22 10.3431 22 12V12C22 13.6569 20.6569 15 19 15H13V9Z" fill="url(#paint0_radial_323_864)"/>
            <path d="M2 11C2 8.79086 3.79086 7 6 7H13V15H6C3.79086 15 2 13.2091 2 11V11Z" fill="url(#paint1_radial_323_864)"/>
            <circle cx="13" cy="9" r="6" fill="#AFB6C0"/>
            <rect x="5" y="16" width="1.31987" height="2.63975" rx="0.659937" fill="#71A5FA"/>
            <rect x="9.64001" y="16" width="1.31987" height="6" rx="0.659937" fill="#71A5FA"/>
            <rect x="7.31982" y="16.2" width="1.31987" height="3.75" rx="0.659937" fill="#71A5FA"/>
            <rect x="7.31995" y="20.3596" width="1.31987" height="1.31987" rx="0.659937" fill="#71A5FA"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4758 17.7115C13.4758 17.2937 13.8444 17 14.2404 17C14.6363 17 15.0049 17.2937 15.0049 17.7115V18.0449L15.3638 17.8591C15.7145 17.6775 16.1741 17.7763 16.3919 18.1147C16.6216 18.4716 16.472 18.9141 16.1083 19.1025L15.8234 19.25L16.1083 19.3975C16.472 19.5859 16.6216 20.0284 16.3919 20.3853C16.1741 20.7237 15.7145 20.8225 15.3638 20.6409L15.0049 20.4551V20.7885C15.0049 21.2063 14.6363 21.5 14.2404 21.5C13.8444 21.5 13.4758 21.2063 13.4758 20.7885V20.4658L13.1376 20.6409C12.7869 20.8225 12.3273 20.7237 12.1095 20.3853C11.8798 20.0284 12.0294 19.5859 12.3931 19.3975L12.678 19.25L12.3931 19.1025C12.0294 18.9141 11.8798 18.4716 12.1095 18.1147C12.3273 17.7763 12.7869 17.6775 13.1376 17.8591L13.4758 18.0342V17.7115Z" fill="#86B3FF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8379 16.4221C17.9497 16.1555 18.2291 16 18.4945 16C18.7605 16 19.0406 16.1563 19.1519 16.424C19.4254 16.3717 19.7271 16.4739 19.8931 16.7322C20.0604 16.9922 20.019 17.2909 19.8544 17.5C20.019 17.7091 20.0604 18.0078 19.8931 18.2678C19.7271 18.5261 19.4254 18.6283 19.1519 18.576C19.0406 18.8437 18.7605 19 18.4945 19C18.2291 19 17.9497 18.8445 17.8379 18.5779C17.5672 18.6257 17.2709 18.5228 17.1069 18.2678C16.9396 18.0078 16.981 17.7091 17.1456 17.5C16.981 17.2909 16.9396 16.9922 17.1069 16.7322C17.2709 16.4772 17.5672 16.3743 17.8379 16.4221Z" fill="#A1C5FC"/>
            <defs>
            <radialGradient id="paint0_radial_323_864" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 9) rotate(45) scale(11.3137 16.9706)">
            <stop offset="0.192708" stop-color="#676B73"/>
            <stop offset="0.916667" stop-color="#B9C0CD"/>
            </radialGradient>
            <radialGradient id="paint1_radial_323_864" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 7) rotate(139.635) scale(13.1244 18.0461)">
            <stop offset="0.34375" stop-color="#989DA3"/>
            <stop offset="0.885417" stop-color="#AFB6C0"/>
            </radialGradient>
            </defs>
        </svg>`
    ),
    iconWeather144: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 9H19C20.6569 9 22 10.3431 22 12V12C22 13.6569 20.6569 15 19 15H13V9Z" fill="url(#paint0_radial_323_817)"/>
            <path d="M2 11C2 8.79086 3.79086 7 6 7H13V15H6C3.79086 15 2 13.2091 2 11V11Z" fill="url(#paint1_radial_323_817)"/>
            <circle cx="13" cy="9" r="6" fill="#AFB6C0"/>
            <rect x="6.86658" y="16" width="1.31987" height="2.63975" rx="0.659937" transform="rotate(45 6.86658 16)" fill="#71A5FA"/>
            <rect x="10.5997" y="16" width="1.31987" height="6.59937" rx="0.659937" transform="rotate(45 10.5997 16)" fill="#71A5FA"/>
            <rect x="14.3329" y="16" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 14.3329 16)" fill="#71A5FA"/>
            <rect x="18.066" y="16" width="1.31987" height="1.31987" rx="0.659937" transform="rotate(45 18.066 16)" fill="#71A5FA"/>
            <rect x="16.1993" y="17.8667" width="1.31987" height="3.95962" rx="0.659937" transform="rotate(45 16.1993 17.8667)" fill="#71A5FA"/>
            <defs>
            <radialGradient id="paint0_radial_323_817" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 9) rotate(45) scale(11.3137 16.9706)">
            <stop offset="0.192708" stop-color="#676B73"/>
            <stop offset="0.916667" stop-color="#B9C0CD"/>
            </radialGradient>
            <radialGradient id="paint1_radial_323_817" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 7) rotate(139.635) scale(13.1244 18.0461)">
            <stop offset="0.34375" stop-color="#989DA3"/>
            <stop offset="0.885417" stop-color="#AFB6C0"/>
            </radialGradient>
            </defs>
        </svg>`
    ),


}