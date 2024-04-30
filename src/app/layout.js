import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from '@/(components)/NavBar';
import theme from '../theme';
import './layout.css';

export const metadata = {
  title: "Tyren Rhinehart, a full-stack developer located in Denver Colorado",
  description: "Tyren Rhinehart is a full-stack developer specialized in React. He has 5 years of experience building complex projects for individuals, companies, and government agencies.",
};

export default function RootLayout(props) {
  return (
    <html  lang="en">
      <body >
        <AppRouterCacheProvider options={{ enableCssLayer: true,  key: 'css' }}>
          <ThemeProvider theme={theme}>
            <div id={"wrapper"}>
            <NavBar/>
            {props.children}
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
