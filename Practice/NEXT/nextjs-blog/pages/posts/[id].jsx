import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

import utilStyles from "../../styles/utils.module.css";

//paths Содержит массив известных путей, возвращаемых функцией getAllPostIds(),
// включая параметры, определённые функцией pages/posts/[id].js.

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    //fallback - false значит, любые пути, не возвращенные функцией, getStaticPaths
    // приведут к появлению страницы 404
    fallback: false,
  };
}

//Страница поста теперь использует getPostData функцию getStaticProps
// для получения данных поста и возвращает их в качестве реквизитов.

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
