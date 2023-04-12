import UserCellFragment from 'src/components/User/UserFragmentCell'

type UserPageProps = {
  id: number
}

const UserPage = ({ id }: UserPageProps) => {
  return <UserCellFragment id={id} />
}

export default UserPage
