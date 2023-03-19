import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const data = [
  {name: 'John', surname: 'Golt',increase:false,salary:400, id:1},
  {name: 'Dagni', surname: 'Tagart',increase:false,salary:700, id:2},
  {name: 'Bilbo', surname: 'Begins',increase:false,salary:900,  id:3},
]

function Application() {
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default Application;