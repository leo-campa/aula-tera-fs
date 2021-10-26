import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './home/redux/store';
import BeerDetailClassChapter4Component from './home/class/capitulo 4/beer-detail-class-cap4';
import HomeClassChapter4Component from './home/class/capitulo 4/home-class-cap4';
import HomeClassChapter5Component from './home/class/capitulo 5/home-class-cap5';
import BeerDetailClassChapter5Component from './home/class/capitulo 5/beer-detail-class-cap5';
import HomeClassChapter1Component from './home/class/capitulo 1/home-class-cap1';
import HomeClassChapter2Component from './home/class/capitulo 2/home-class-cap2';
import HomeFunctionalChapter1Component from './home/funcional/capitulo 1/home-functional-cap1';
import HomeFunctionalChapter2Component from './home/funcional/capitulo 2/home-functional-cap2';
import HomeFunctionalChapter4Component from './home/funcional/capitulo 4/home-functional-cap4';
import BeerDetailFunctionalChapter4Component from './home/funcional/capitulo 4/beer-detail-functional-cap4';
import BeerDetailFunctionalChapter5Component from './home/funcional/capitulo 5/beer-detail-functional-cap5';
import Sumary from './home/sumary';
import HomeFunctionalChapter5Component from './home/funcional/capitulo 5/home-functional-cap5';
import HomeFunctionalChapter2MemoComponent from './home/funcional/capitulo 2/home-functional-cap2-memo';
import HomeClassChapter2ShouldUpdateComponent from './home/class/capitulo 2/home-class-cap2-should-update';
import PageNotFound from './home/page-not-found';
import HomeFunctionalChapter2UseMemoComponent from './home/funcional/capitulo 2/home-functional-cap2-useMemo';
import HomeFunctionalChapter2UseCallbackComponent from './home/funcional/capitulo 2/home-functional-cap2-useCallback';
import HomeFunctionalChapter2UseContextComponent from './home/funcional/capitulo 2/home-functional-cap2-useContext';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Sumary} />
          <Route
            path='/functional/chapter1'
            component={HomeFunctionalChapter1Component}
          />
          <Route
            path='/functional/chapter2'
            exact={true}
            component={HomeFunctionalChapter2Component}
          />
          <Route
            path='/functional/chapter2/memo'
            component={HomeFunctionalChapter2MemoComponent}
          />
          <Route
            path='/functional/chapter2/use-memo'
            component={HomeFunctionalChapter2UseMemoComponent}
          />
          <Route
            path='/functional/chapter2/use-callback'
            component={HomeFunctionalChapter2UseCallbackComponent}
          />
          <Route
            path='/functional/chapter2/use-context'
            component={HomeFunctionalChapter2UseContextComponent}
          />
          <Route
            exact={true}
            path='/functional/chapter4'
            component={HomeFunctionalChapter4Component}
          />
          <Route
            exact={true}
            path='/functional/chapter5'
            component={HomeFunctionalChapter5Component}
          />
          <Route
            path='/functional/chapter4/beer-detail/:idBeer'
            render={(props) => {
              return (
                <BeerDetailFunctionalChapter4Component
                  {...{ ...props.location.state, ...props.match.params }}
                />
              );
            }}
          />
          <Route
            path='/functional/chapter5/beer-detail'
            component={BeerDetailFunctionalChapter5Component}
          />
          <Route
            path='/class/chapter1'
            component={HomeClassChapter1Component}
          />
          <Route
            exact={true}
            path='/class/chapter2'
            component={HomeClassChapter2Component}
          />
          <Route
            path='/class/chapter2/should-update'
            component={HomeClassChapter2ShouldUpdateComponent}
          />
          <Route
            exact={true}
            path='/class/chapter4'
            component={HomeClassChapter4Component}
          />
          <Route
            exact={true}
            path='/class/chapter5'
            component={HomeClassChapter5Component}
          />

          <Route
            path='/class/chapter5/beer-detail'
            component={BeerDetailClassChapter5Component}
          />
          <Route
            path='/class/chapter4/beer-detail/:idBeer'
            render={(props) => (
              <BeerDetailClassChapter4Component
                {...{ ...props.location.state, ...props.match.params }}
              />
            )}
          />
          <Route path='/error' component={PageNotFound} />
          <Redirect from='*' to='/error' />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
