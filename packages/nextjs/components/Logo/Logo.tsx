import styles from "./Logo.module.scss";
import { cn } from "~~/lib/utils";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ className, onClick }): JSX.Element => {
  const logoClasses = cn(styles.Logo, className);

  return (
    <span className={logoClasses} onClick={() => onClick && onClick()}>
      <svg width={242} height={56} viewBox="0 0 242 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_94_9140)">
          <path
            d="M4.39587 21.1051L28.2383 7.28632L33.0474 10.0385L9.14698 23.8573L4.39587 21.1051Z"
            stroke="#FF843F"
            strokeWidth="0.898396"
            strokeMiterlimit={10}
            strokeLinejoin="round"
          />
          <path
            d="M4.39587 21.1051L4.3669 26.5805L9.14698 29.3906V23.8573L4.39587 21.1051Z"
            stroke="#FF843F"
            strokeWidth="0.898396"
            strokeMiterlimit={10}
            strokeLinejoin="round"
          />
          <path
            d="M9.14699 29.3906L13.9271 26.6384L18.7071 23.8573V45.9325L23.4872 43.1804V21.1051L33.0474 15.5718V10.0385L9.14699 23.8573"
            stroke="#FF843F"
            strokeWidth="0.898396"
            strokeMiterlimit={10}
            strokeLinejoin="round"
          />
          <path
            d="M13.9271 43.1804L18.7071 45.9325V23.8573L13.9271 26.6384V43.1804Z"
            stroke="#FF843F"
            strokeWidth="0.898396"
            strokeMiterlimit={10}
            strokeLinejoin="round"
          />
          <path
            d="M23.4872 21.1051L28.2673 23.8573L33.0474 21.1051L28.2673 18.324L23.4872 21.1051Z"
            stroke="#FF843F"
            strokeWidth="0.898396"
            strokeMiterlimit={10}
            strokeLinejoin="round"
          />
          <path
            d="M28.2673 23.8573V45.9325L42.6075 37.6471V32.1427L33.0474 37.676V21.1051L28.2673 23.8573Z"
            stroke="#FF843F"
            strokeWidth="0.898396"
            strokeMiterlimit={10}
            strokeLinejoin="round"
          />
          <path
            d="M28.2673 45.9325L23.4872 43.1804V21.1051L28.2673 23.8573V45.9325Z"
            stroke="#FF843F"
            strokeWidth="0.898396"
            strokeMiterlimit={10}
            strokeLinejoin="round"
          />
          <path
            d="M42.6075 32.1427L37.8275 29.3906L33.0474 32.1427V37.676L42.6075 32.1427Z"
            stroke="#FF843F"
            strokeWidth="0.898396"
            strokeMiterlimit={10}
            strokeLinejoin="round"
          />
          <path
            d="M2.25205 13.399L23.1975 1.28949C24.0956 0.768026 25.1964 0.768026 26.0945 1.28949L47.04 13.399C47.938 13.9205 48.4885 14.8765 48.4885 15.9194V40.1095C48.4885 41.1525 47.938 42.1085 47.04 42.6299L26.0945 54.7105C25.1964 55.232 24.0956 55.232 23.1975 54.7105L2.25205 42.601C1.35398 42.0795 0.803543 41.1235 0.803543 40.0806V15.8905C0.803543 14.8765 1.35398 13.9205 2.25205 13.399Z"
            stroke="#FF843F"
            strokeWidth="0.898396"
            strokeMiterlimit={10}
            strokeLinejoin="round"
          />
          <path
            d="M65.523 19.0759V16.5305H80.7957V19.0759H65.523ZM74.6567 17.1594V36.5048H71.662V17.1594H74.6567Z"
            fill="white"
          />
          <path
            d="M89.4503 36.8642C87.8631 36.8642 86.5455 36.5348 85.4674 35.9059C84.3893 35.277 83.5808 34.3786 83.0717 33.2706C82.5626 32.1326 82.2931 30.8749 82.2931 29.4075C82.2931 27.9701 82.5626 26.6824 83.0717 25.5444C83.5808 24.4064 84.3893 23.538 85.4374 22.9091C86.5155 22.2802 87.8332 21.9508 89.4503 21.9508C91.7562 21.9508 93.523 22.6396 94.7508 24.0171C95.9487 25.3947 96.5476 27.1914 96.5476 29.4374C96.5476 30.8449 96.2781 32.1027 95.769 33.2107C95.2599 34.3487 94.4813 35.2171 93.4332 35.8759C92.415 36.5348 91.0674 36.8642 89.4503 36.8642ZM89.4503 34.3487C90.5883 34.3487 91.4567 34.1091 92.0556 33.6C92.6546 33.0909 93.0738 32.462 93.3134 31.7134C93.553 30.9348 93.6727 30.1562 93.6727 29.3476C93.6727 28.539 93.553 27.7604 93.3134 26.9818C93.0738 26.2032 92.6546 25.5743 92.0556 25.0952C91.4567 24.5861 90.5883 24.3465 89.4503 24.3465C88.3123 24.3465 87.4439 24.5861 86.815 25.0952C86.1861 25.6043 85.7669 26.2332 85.5273 26.9818C85.2877 27.7604 85.1679 28.539 85.1679 29.3476C85.1679 30.1562 85.2877 30.9348 85.5273 31.7134C85.7669 32.492 86.1861 33.1209 86.815 33.6C87.4439 34.0791 88.3123 34.3487 89.4503 34.3487Z"
            fill="white"
          />
          <path
            d="M102.507 36.5048H99.5123V16.5005H102.507V36.5048ZM102.327 32.9112V29.5273L109.544 21.8909H113.228L102.327 32.9112ZM106.16 26.892L113.348 36.5048H109.754L104.004 28.9283L106.16 26.892Z"
            fill="white"
          />
          <path
            d="M121.523 36.8642C119.876 36.8642 118.558 36.5048 117.51 35.7861C116.462 35.0674 115.713 34.139 115.204 33.0011C114.695 31.8631 114.456 30.6952 114.426 29.4374C114.426 28.0299 114.695 26.7422 115.264 25.6043C115.833 24.4663 116.612 23.5679 117.69 22.9091C118.738 22.2503 119.996 21.9209 121.463 21.9209C122.751 21.9209 123.889 22.1904 124.877 22.7594C125.865 23.3283 126.674 24.107 127.243 25.0952C127.842 26.1134 128.141 27.3112 128.201 28.6888C128.231 28.7487 128.231 28.8984 128.231 29.108C128.231 29.3176 128.231 29.4674 128.231 29.5872H117.241C117.241 31.1144 117.6 32.2824 118.349 33.1209C119.097 33.9594 120.116 34.3786 121.463 34.3786C122.451 34.3786 123.29 34.139 124.009 33.6299C124.697 33.1209 125.117 32.4321 125.266 31.5936H128.171C128.021 32.5818 127.662 33.4802 127.093 34.2888C126.524 35.0973 125.775 35.7262 124.817 36.1754C123.919 36.6246 122.811 36.8642 121.523 36.8642ZM117.39 28.1198H125.236C125.236 27.8503 125.176 27.5209 125.057 27.1016C124.937 26.6824 124.727 26.2631 124.458 25.8438C124.188 25.4246 123.769 25.0652 123.29 24.7658C122.781 24.4963 122.152 24.3465 121.403 24.3465C120.685 24.3465 120.086 24.4663 119.606 24.7059C119.097 24.9455 118.708 25.2749 118.409 25.6342C118.109 26.0235 117.87 26.4128 117.72 26.862C117.54 27.3412 117.42 27.7305 117.39 28.1198Z"
            fill="white"
          />
          <path
            d="M131.046 36.5048V21.9807H133.591L134.101 25.3647H134.16C134.19 25.2749 134.28 25.0353 134.43 24.6759C134.61 24.3166 134.879 23.9273 135.239 23.508C135.628 23.0888 136.137 22.7294 136.766 22.4299C137.395 22.1305 138.203 21.9807 139.191 21.9807C140.21 21.9807 141.048 22.1305 141.707 22.4599C142.366 22.7893 142.875 23.2086 143.264 23.7476C143.654 24.2866 143.923 24.8856 144.103 25.5444C144.282 26.2032 144.372 26.862 144.432 27.5209C144.492 28.1797 144.492 28.8085 144.492 29.4075V36.5048H141.647V29.4075C141.647 28.4791 141.557 27.6706 141.378 26.9519C141.198 26.2331 140.839 25.6642 140.359 25.2449C139.85 24.8257 139.102 24.616 138.113 24.616C137.125 24.616 136.317 24.8556 135.748 25.3348C135.179 25.8139 134.759 26.4128 134.49 27.1914C134.25 27.9401 134.131 28.7487 134.131 29.6171V36.5348H131.046V36.5048Z"
            fill="white"
          />
          <path
            d="M148.235 36.2652V16.5005H151.17V36.2353H148.235V36.2652ZM148.235 36.5048V33.9594H161.651V36.5048H148.235Z"
            fill="white"
          />
          <path
            d="M170.635 36.8642C168.988 36.8642 167.671 36.5048 166.622 35.7861C165.574 35.0674 164.826 34.139 164.317 33.0011C163.807 31.8631 163.568 30.6952 163.538 29.4374C163.538 28.0299 163.807 26.7422 164.376 25.6043C164.945 24.4663 165.724 23.5679 166.802 22.9091C167.85 22.2503 169.108 21.9209 170.575 21.9209C171.863 21.9209 173.001 22.1904 173.989 22.7594C174.978 23.3283 175.786 24.107 176.355 25.0952C176.954 26.1134 177.253 27.3112 177.313 28.6888C177.343 28.7487 177.343 28.8984 177.343 29.108C177.343 29.3176 177.343 29.4674 177.343 29.5872H166.353C166.353 31.1144 166.712 32.2824 167.461 33.1209C168.21 33.9594 169.228 34.3786 170.575 34.3786C171.564 34.3786 172.402 34.139 173.121 33.6299C173.81 33.1209 174.229 32.4321 174.379 31.5936H177.283C177.134 32.5818 176.774 33.4802 176.205 34.2888C175.636 35.0973 174.888 35.7262 173.929 36.1754C173.001 36.6246 171.893 36.8642 170.635 36.8642ZM166.473 28.1198H174.319C174.319 27.8503 174.259 27.5209 174.139 27.1016C174.019 26.6824 173.81 26.2631 173.54 25.8438C173.271 25.4246 172.851 25.0652 172.372 24.7658C171.863 24.4963 171.234 24.3465 170.486 24.3465C169.767 24.3465 169.168 24.4663 168.689 24.7059C168.18 24.9455 167.79 25.2749 167.491 25.6342C167.191 26.0235 166.952 26.4128 166.802 26.862C166.622 27.3412 166.503 27.7305 166.473 28.1198Z"
            fill="white"
          />
          <path
            d="M183.991 42.7636V39.9487H190.759V33.6299H190.699C190.67 33.6898 190.55 33.8995 190.37 34.2588C190.16 34.5882 189.861 34.9775 189.472 35.3668C189.082 35.7561 188.573 36.1155 187.974 36.415C187.345 36.7144 186.597 36.8642 185.668 36.8642C184.261 36.8642 183.123 36.5348 182.195 35.9059C181.266 35.277 180.578 34.3786 180.158 33.2706C179.709 32.1626 179.499 30.8749 179.499 29.4374C179.499 27.9401 179.739 26.6225 180.188 25.5144C180.637 24.3765 181.326 23.508 182.255 22.9091C183.183 22.2802 184.351 21.9807 185.728 21.9807C186.687 21.9807 187.465 22.1305 188.094 22.4299C188.723 22.7294 189.232 23.1187 189.591 23.538C189.981 23.9572 190.25 24.3465 190.4 24.7059C190.58 25.0652 190.67 25.2749 190.729 25.3946H190.789V21.9807H193.844V38.3615C193.844 39.4096 193.724 40.2481 193.455 40.9069C193.185 41.5658 192.766 42.0449 192.197 42.3144C191.628 42.6139 190.879 42.7636 189.981 42.7636H183.991ZM186.477 34.3187C187.405 34.3187 188.184 34.1091 188.813 33.7198C189.442 33.3305 189.921 32.7615 190.25 32.0128C190.58 31.2642 190.729 30.4257 190.729 29.4674C190.729 28.5091 190.58 27.7005 190.28 26.9519C189.981 26.2331 189.502 25.6642 188.903 25.2749C188.304 24.8856 187.525 24.6759 186.597 24.6759C185.549 24.6759 184.71 24.9155 184.081 25.3647C183.452 25.8139 183.003 26.4128 182.734 27.1615C182.464 27.9102 182.314 28.6588 182.314 29.4674C182.314 30.3059 182.434 31.0845 182.674 31.8332C182.913 32.5818 183.363 33.1807 183.962 33.6299C184.56 34.0791 185.429 34.3187 186.477 34.3187Z"
            fill="white"
          />
          <path
            d="M201.69 36.8642C200.372 36.8642 199.294 36.5348 198.426 35.9059C197.587 35.277 196.988 34.3786 196.599 33.2706C196.21 32.1326 196.03 30.8749 196.03 29.4075C196.03 27.9102 196.24 26.6225 196.629 25.4845C197.018 24.3465 197.647 23.4781 198.486 22.8492C199.324 22.2203 200.402 21.8909 201.69 21.8909C202.528 21.8909 203.217 22.0107 203.786 22.2203C204.355 22.4599 204.834 22.7294 205.194 23.0588C205.583 23.3882 205.882 23.7177 206.092 24.077C206.332 24.4064 206.481 24.7358 206.601 24.9754H206.631V21.9808H209.686V36.5048H207.14L206.691 33.8995H206.631C206.511 34.169 206.332 34.4685 206.092 34.7979C205.852 35.1273 205.553 35.4567 205.164 35.7562C204.774 36.0556 204.325 36.3251 203.756 36.5348C203.187 36.7444 202.498 36.8642 201.69 36.8642ZM202.918 34.3187C203.876 34.3187 204.625 34.1091 205.164 33.6898C205.703 33.2706 206.092 32.7016 206.332 31.9529C206.571 31.2043 206.691 30.3658 206.691 29.4374C206.691 28.4193 206.571 27.5508 206.332 26.8321C206.092 26.1134 205.673 25.5444 205.134 25.1551C204.595 24.7658 203.846 24.5562 202.918 24.5562C201.959 24.5562 201.181 24.7658 200.582 25.215C200.013 25.6642 199.594 26.2332 199.324 26.9519C199.085 27.6706 198.965 28.5091 198.965 29.4075C198.965 30.3059 199.085 31.1444 199.324 31.8631C199.564 32.5818 199.983 33.1808 200.582 33.63C201.151 34.0792 201.929 34.3187 202.918 34.3187Z"
            fill="white"
          />
          <path
            d="M219.149 36.8642C217.801 36.8642 216.573 36.5947 215.495 36.0257C214.417 35.4567 213.549 34.6481 212.89 33.5401C212.231 32.4321 211.932 31.1144 211.932 29.5572C211.991 28 212.321 26.6524 212.95 25.5144C213.579 24.3765 214.447 23.508 215.525 22.8791C216.603 22.2503 217.831 21.9508 219.209 21.9508C220.586 21.9508 221.754 22.2203 222.742 22.7294C223.731 23.2385 224.509 23.9273 225.078 24.7658C225.647 25.6043 225.976 26.5027 226.096 27.4909H223.371C223.191 26.5326 222.742 25.8139 222.024 25.3048C221.305 24.7957 220.406 24.5262 219.328 24.5262C218.37 24.5262 217.562 24.7358 216.903 25.1251C216.244 25.5144 215.735 26.0834 215.375 26.8021C215.016 27.5209 214.836 28.3594 214.806 29.3177C214.806 30.815 215.196 32.0128 215.974 32.9112C216.753 33.8096 217.861 34.2588 219.268 34.2588C220.287 34.2588 221.185 33.9893 221.934 33.4802C222.682 32.9711 223.162 32.1925 223.341 31.2043H226.066C225.947 32.1925 225.587 33.1209 225.018 33.9893C224.449 34.8278 223.641 35.5465 222.652 36.0556C221.694 36.5947 220.526 36.8642 219.149 36.8642Z"
            fill="white"
          />
          <path
            d="M227.264 43.1529V40.8171H229.36C229.69 40.8171 229.989 40.7872 230.259 40.6973C230.528 40.6075 230.768 40.4278 231.008 40.0984C231.247 39.7989 231.517 39.3198 231.816 38.6909L233.074 35.9957L227.384 22.0107H230.439L234.511 32.9112L238.883 22.0107H241.968L234.511 39.0203C234.122 39.9187 233.733 40.6374 233.433 41.2064C233.104 41.7754 232.774 42.1947 232.445 42.4642C232.116 42.7337 231.696 42.9433 231.277 43.0332C230.828 43.123 230.319 43.1829 229.72 43.1829H227.264V43.1529Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_94_9140">
            <rect width="241.968" height={56} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default Logo;