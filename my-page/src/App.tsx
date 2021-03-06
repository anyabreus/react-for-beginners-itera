import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { ShortInfo } from './ShortInfo';

const App = () => (
    <div className="App">
      <Header firstName="Anna"/>
      <ShortInfo dateOfBirth="08-11-1998" city="Poltava" aboutMe="In a accumsan ex. Praesent et massa in justo pellentesque ultrices. Fusce ac auctor elit. Praesent eu orci laoreet, placerat diam facilisis, feugiat erat. Etiam mattis accumsan iaculis. Aliquam mattis orci in libero scelerisque, eu blandit eros hendrerit. Phasellus convallis sagittis odio, et interdum dui. Cras commodo mi et sapien"/>
      <Footer tel="+38(066)-123-45-67" email="examp.le@link.com"/>
    </div>
);

export default App;
