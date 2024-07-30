/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryPurple: 'var(--primaryPurple)',
        primaryPurpleHover: 'var(--primaryPurpleHover)',
        primaryLightPurple: 'var(--primaryLightPurple)',
        primaryLightPurpleHover: 'var(--primaryLightPurpleHover)',
        primaryBlack: 'var(--primaryBlack)',
        primaryDarkGrey: 'var(--primaryDarkGrey)',
        primaryLinesDark: 'var(--primaryLinesDark)',
        primaryMediumGrey: 'var(--primaryMediumGrey)',
        primaryLinesLight: 'var(--primaryLinesLight)',
        primaryLightGrey: 'var(--primaryLightGrey)',
        primaryWhite: 'var(--primaryWhite)',
        primaryRed: 'var(--primaryRed)',
        primaryRedHover: 'var(--primaryRedHover)',
        primaryVeryDarkGrey: 'var(--primaryVeryDarkGrey)',
        primaryBorder: 'var(--primaryBorder)',
      },
      width: {
        sidebarDesktopWidth: 'var(--sidebarDesktopWidth)',
        sidebarTabletWidth: 'var(--sidebarTabletWidth)',
      },
      padding: {
        headerTabletPadding: 'var(--headerTabletPadding)',
        headerDesktopPadding: 'var(--headerDesktopPadding)',
        headerMobilePadding: 'var(--headerMobilePadding)',
      },
      boxShadow: {
        task: '0px 4px 6px 0px rgba(54, 78, 126, 0.10);',
        taskHover: '0px 4px 6px 0px rgba(54, 78, 126, 0.25);',
        menu: '0px 10px 20px 0px rgba(54, 78, 126, 0.25);',
      },
      backgroundImage: {
        customGradient: 'linear-gradient(180deg, #FFFFFF 0%, #AFA3FF 100%)',
        column:
          'linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.50) 100%)',
        columnDark:
          'linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.13) 100%)',
      },
    },
  },
  plugins: [],
};
