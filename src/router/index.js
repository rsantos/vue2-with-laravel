import Hello from '@/components/Hello'
import AccountsList from '@/components/Accounts/List'

const routes = [
  {path: '/', name: 'Hello', component: Hello},
  {path: '/contas', component: AccountsList}
]

export default routes
