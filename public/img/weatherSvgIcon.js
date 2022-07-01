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
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2878 7.44973C11.8431 7.1699 11.3971 7.22579 10.0627 7.46597C9.68149 7.53459 9.16385 7.67114 8.72691 7.86986C8.51063 7.96823 8.35195 8.06489 8.24822 8.14796C8.24205 8.1529 8.23625 8.15765 8.23079 8.16222C8.24509 8.21347 8.26698 8.27958 8.29978 8.36159C8.40261 8.61871 8.53003 8.84711 8.67525 9.10742C8.72805 9.20205 8.7832 9.3009 8.84037 9.40689C9.2337 10.136 8.96151 11.0459 8.23241 11.4392C7.50331 11.8325 6.5934 11.5604 6.20007 10.8313C6.17893 10.7921 6.14998 10.7405 6.11541 10.6789C5.96203 10.4055 5.69796 9.93489 5.51426 9.47554C5.31027 8.96544 4.98846 7.97552 5.42232 6.99934C5.86732 5.99809 6.82481 5.43926 7.4849 5.13904C8.21213 4.80828 8.98475 4.61179 9.53128 4.51342C9.60877 4.49947 9.69112 4.48382 9.77788 4.46733C10.7868 4.2756 12.3916 3.97061 13.8855 4.91056C15.0843 5.66488 16.074 6.79134 16.6329 8.11628C16.9533 8.87573 17.3702 10.1024 16.9813 11.3919C16.7018 12.3189 15.9839 12.9404 15.5063 13.3018C15.2418 13.5019 14.9715 13.679 14.7463 13.8238C14.6914 13.8591 14.6403 13.8918 14.5926 13.9223C14.4276 14.0279 14.302 14.1083 14.1908 14.1863C13.9819 14.3329 13.8329 14.4524 13.7345 14.5589C13.7123 14.5828 13.6971 14.6014 13.6872 14.6146C13.6805 14.6843 13.6827 14.7463 13.6864 14.8523C13.6899 14.9504 13.6947 15.0862 13.695 15.3006C13.6986 15.3149 13.7108 15.3645 13.7462 15.4802C13.7492 15.4901 13.7526 15.501 13.7563 15.5128C13.8108 15.6885 13.9287 16.0688 13.9287 16.5079C13.9287 17.3363 13.2572 18.0079 12.4287 18.0079C11.6101 18.0079 10.9446 17.3521 10.929 16.5371C10.9249 16.5218 10.9122 16.4715 10.8775 16.3581C10.8747 16.349 10.8717 16.3393 10.8685 16.3288C10.8126 16.148 10.695 15.7672 10.695 15.3219C10.695 15.3003 10.6938 15.2634 10.6923 15.2147C10.685 14.9837 10.6694 14.4876 10.73 14.0967C10.8389 13.3936 11.2118 12.8682 11.5319 12.522C11.8542 12.1735 12.2175 11.9061 12.4673 11.7308C12.6366 11.612 12.8342 11.4856 13.0069 11.3753C13.0475 11.3493 13.0867 11.3243 13.1238 11.3004C13.3385 11.1624 13.528 11.0366 13.6961 10.9095C14.0394 10.6497 14.1082 10.5172 14.1109 10.5186C14.1112 10.5187 14.1105 10.5211 14.1091 10.5257C14.1772 10.3 14.1389 9.92259 13.8689 9.28238C13.561 8.55258 12.9934 7.8937 12.2878 7.44973ZM13.6705 14.6392C13.6704 14.6392 13.6707 14.6386 13.6714 14.6375Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7316 21.9522C12.7322 21.9518 12.7326 21.9515 12.7329 21.9513L12.7331 21.9512C12.7326 21.9515 12.7321 21.9518 12.7316 21.9522ZM10.464 21.2015C10.4764 21.3957 10.5271 21.5906 10.6196 21.7755C10.9901 22.5165 11.8911 22.8168 12.6321 22.4463C13.014 22.2553 13.2605 21.9662 13.405 21.7361C13.5436 21.5153 13.6887 21.1891 13.7054 20.7977C13.7137 20.6012 13.694 20.2673 13.499 19.921C13.2732 19.5201 12.8841 19.236 12.426 19.1459C12.0315 19.0683 11.7034 19.1559 11.5191 19.2234C11.3215 19.2958 11.1574 19.3938 11.0335 19.479C10.466 19.8692 10.2508 20.5805 10.464 21.2015Z" fill="black"/>
        </svg>`
    ),
    iconWeather010: () => (
      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" fill="url(#paint0_linear_323_769)"/>
            <defs>
            <linearGradient id="paint0_linear_323_769" x1="9.45455" y1="4" x2="15.6364" y2="20" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFAD33"/>
            <stop offset="0.9999" stop-color="#FF8F20"/>
            <stop offset="1" stop-color="#FFAD33" stop-opacity="0"/>
            </linearGradient>
            </defs>
        </svg>`
    ),
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
    iconWeather110: () => (
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 15.2031C20.9046 15.5998 19.7227 15.8161 18.4904 15.8161C12.7983 15.8161 8.1839 11.2017 8.1839 5.50962C8.1839 4.27726 8.4002 3.09543 8.79688 2C4.83263 3.43558 2 7.23375 2 11.6935C2 17.3856 6.61438 22 12.3065 22C16.7662 22 20.5644 19.1674 22 15.2031Z" fill="url(#paint0_linear_323_775)"/>
            <defs>
            <linearGradient id="paint0_linear_323_775" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <stop stop-color="#85B6FD"/>
            <stop offset="1" stop-color="#769CFF"/>
            </linearGradient>
            </defs>
        </svg>`
    ),
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
    iconWindArrow: (direction) => (
        `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_361_377)" style="transform: rotate(${direction}deg); transform-origin: center;">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.928879 6.65685L7.29284 0.292893C7.68336 -0.0976318 8.31653 -0.0976318 8.70705 0.292893L15.071 6.65685C15.4615 7.04738 15.4615 7.68054 15.071 8.07107C14.6805 8.46159 14.0473 8.46159 13.6568 8.07107L8.99995 3.41421L8.99995 15C8.99995 15.5523 8.55223 16 7.99995 16C7.44766 16 6.99995 15.5523 6.99995 15L6.99995 3.41421L2.34309 8.07107C1.95257 8.46159 1.3194 8.46159 0.928879 8.07107C0.538355 7.68054 0.538355 7.04738 0.928879 6.65685Z" fill="#87AC91"/>
            </g>
            <defs>
            <clipPath id="clip0_361_377">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
        </svg>`
    )
    // TODO: iconWindArrow 회전 반영(데이터는 itemData.windDirection 이용)

}