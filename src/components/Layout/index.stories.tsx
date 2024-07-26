import Layout from '@components/Layout';
import Button from '@components/common/Button';
import Icon from '@components/common/Icon';
import ItemList from '@components/common/ItemList';
import TabBar from '@components/common/TabBar';
import UserInfo from '@components/common/UserInfo';
import { Meta, StoryObj } from '@storybook/react';

const userInfoProps = {
  nickname: 'Hemdi',
  email: 'suminhesam@gmail.com',
  profileImageUrl: 'https://avatars.githubusercontent.com/u/34249911?v=4',
};

const EmptyMessage = (label: string) => (
  <div className="flex h-96 w-full flex-col items-center justify-center text-body1 text-gray-700">
    <span>{`앗! 아직 북마크된 ${label}가 없어요!`}</span>
    <span>{`${label}를 만들고 저장하러 가볼까요?`}</span>
  </div>
);

const ItemComponent = (
  <div className="flex items-center">
    <span>파리 올림픽에서 태권도 보러가면 현지인들이 한국 사람인걸 알아볼까?</span>
    <div className="cursor-pointer">
      <Icon type="closeCircle" color="#C9C9CA" />
    </div>
  </div>
);

const ScriptList = (
  <ItemList
    itemList={[
      ItemComponent,
      ItemComponent,
      ItemComponent,
      ItemComponent,
      ItemComponent,
      ItemComponent,
      ItemComponent,
      ItemComponent,
      ItemComponent,
    ]}
  />
);

const tabs = [
  {
    label: '스크립트',
    content: ScriptList,
  },
  { label: '아이디어', content: EmptyMessage('아이디어') },
];

const meta = {
  title: 'Components/Layout',
  component: Layout,
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: ({ ...args }) => (
    <div className="mx-auto flex h-screen w-full bg-primary-50">
      <Layout {...args} />
    </div>
  ),
  args: {
    children: (
      <>
        <Layout.Header leftMenu="home" rightMenu="setting" />
        <Layout.Main>
          <UserInfo {...userInfoProps} />
          <TabBar tabs={tabs} />
        </Layout.Main>
        <Layout.BottomMenu>
          <Button>새로운 스크립트 쓰러가기</Button>
        </Layout.BottomMenu>
      </>
    ),
  },
};
