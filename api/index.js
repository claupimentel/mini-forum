const DB = require("./db");
const Koa = require("koa");
const _ = require("koa-route");
const cors = require("@koa/cors");

const app = new Koa();
app.use(cors());

const threads = {
  index(ctx) {
    ctx.status = 200;
    ctx.body = {
      data: [
        {
          id: 1,
          title: "quaerat praesentium odio neque aspernatur",
          slug: "quaerat-praesentium-odio-neque-aspernatur-1",
          body:
            "Et blanditiis eos est. Eaque blanditiis minima totam. Ad expedita quia modi libero quos distinctio accusantium excepturi. Iure totam numquam suscipit aperiam id nulla saepe.",
          total_replies: 10,
          user: {
            id: 5,
            name: "César Carvalho",
            email: "Ricardo33@yahoo.com",
            created_at: 1564357020814,
          },
          created_at: 1564222020815,
        },
        {
          id: 2,
          title: "labore consequuntur sed dolorem qui",
          slug: "labore-consequuntur-sed-dolorem-qui-2",
          body:
            "Sed delectus soluta impedit illum sint odio ipsam. Tenetur porro perspiciatis nesciunt quia. Consequatur iste et. Ipsum magnam porro quam est provident. Iste minus facilis est nostrum.",
          total_replies: 4,
          user: {
            id: 5,
            name: "César Carvalho",
            email: "Ricardo33@yahoo.com",
            created_at: 1564357020814,
          },
          created_at: 1564237020815,
        },
        {
          id: 3,
          title: "voluptatem quod aut quia et autem",
          slug: "voluptatem-quod-aut-quia-et-autem-3",
          body:
            "Rerum quae quo. Esse qui ratione aut quaerat omnis fuga alias. Unde impedit in.",
          total_replies: 6,
          user: {
            id: 9,
            name: "Alessandro Souza",
            email: "Marcela_Macedo@gmail.com",
            created_at: 1564417020814,
          },
          created_at: 1564252020815,
        },
        {
          id: 4,
          title: "impedit aliquam molestias possimus numquam",
          slug: "impedit-aliquam-molestias-possimus-numquam-4",
          body:
            "Voluptatem saepe reiciendis ex et nihil provident laboriosam. Eaque voluptatum ratione alias in voluptas aut culpa recusandae eius. Sit distinctio voluptatem facere necessitatibus iste soluta. Architecto molestiae fugit cupiditate laborum quibusdam quibusdam. Quis beatae dolor quia dolore.",
          total_replies: 7,
          user: {
            id: 8,
            name: "Yago Moreira",
            email: "Rafaela79@yahoo.com",
            created_at: 1564402020814,
          },
          created_at: 1564267020815,
        },
        {
          id: 5,
          title: "cupiditate incidunt non incidunt illo",
          slug: "cupiditate-incidunt-non-incidunt-illo-5",
          body:
            "Vel iusto totam et. Vel quaerat in molestiae. Mollitia laborum ad et aut repudiandae dolorem asperiores.",
          total_replies: 13,
          user: {
            id: 3,
            name: "Carla Melo",
            email: "Sara_Saraiva@yahoo.com",
            created_at: 1564327020814,
          },
          created_at: 1564282020815,
        },
        {
          id: 6,
          title: "omnis quod iste dolorem sed id",
          slug: "omnis-quod-iste-dolorem-sed-id-6",
          body:
            "Quidem distinctio vel. Est adipisci dignissimos totam officia est a quae nihil hic. Iure eius dolorum qui dolor. Eum deserunt mollitia dolor sed. Deserunt accusantium harum.",
          total_replies: 8,
          user: {
            id: 1,
            name: "Dalila Carvalho",
            email: "Marli.Franco@bol.com.br",
            created_at: 1564297020814,
          },
          created_at: 1564297020815,
        },
        {
          id: 7,
          title: "est minima odit ab vel enim libero",
          slug: "est-minima-odit-ab-vel-enim-libero-7",
          body:
            "Voluptatem a doloribus earum quod sed omnis neque. Aut odio officiis aut aperiam recusandae pariatur nihil. Accusamus non esse laborum eaque tempore perspiciatis nihil occaecati. Doloremque dolorum quo vitae omnis et vel. Tempore dignissimos recusandae qui nihil excepturi adipisci ab. Voluptatem aut nostrum.",
          total_replies: 8,
          user: {
            id: 4,
            name: "Warley Martins",
            email: "Paulo_Martins33@yahoo.com",
            created_at: 1564342020814,
          },
          created_at: 1564312020815,
        },
        {
          id: 8,
          title: "qui dolores autem repellendus fuga",
          slug: "qui-dolores-autem-repellendus-fuga-8",
          body:
            "Ullam aut et velit quam expedita saepe cupiditate. Debitis est eaque sapiente voluptatem. Facere debitis ut veniam asperiores sint ipsam laborum. Blanditiis consequatur tenetur architecto quas facere nulla nulla sapiente. Odio nesciunt quia.",
          total_replies: 4,
          user: {
            id: 6,
            name: "Júlio César Costa",
            email: "Slvia_Carvalho51@gmail.com",
            created_at: 1564372020814,
          },
          created_at: 1564327020815,
        },
        {
          id: 9,
          title: "architecto consectetur ad voluptatem deleniti",
          slug: "architecto-consectetur-ad-voluptatem-deleniti-9",
          body:
            "Quibusdam ut delectus. Ut nobis dolorem nulla voluptatem soluta eveniet. Sed quisquam quod sit reprehenderit ab iste. Corrupti explicabo porro facere eligendi veritatis neque. Ipsa harum error voluptate non sed minima. Provident nostrum rerum corporis dolor dolores ut iste repudiandae ut.",
          total_replies: 10,
          user: {
            id: 1,
            name: "Dalila Carvalho",
            email: "Marli.Franco@bol.com.br",
            created_at: 1564297020814,
          },
          created_at: 1564342020816,
        },
        {
          id: 10,
          title: "alias nobis qui sit",
          slug: "alias-nobis-qui-sit-10",
          body:
            "Consequatur autem velit totam aperiam architecto consequatur. Ratione rerum autem deserunt corrupti id ut et. Corporis et non nemo ut ut. Perspiciatis ad autem adipisci non error totam aut illum.",
          total_replies: 6,
          user: {
            id: 4,
            name: "Warley Martins",
            email: "Paulo_Martins33@yahoo.com",
            created_at: 1564342020814,
          },
          created_at: 1564357020816,
        },
        {
          id: 11,
          title: "eaque fuga delectus esse et velit ratione",
          slug: "eaque-fuga-delectus-esse-et-velit-ratione-11",
          body:
            "Impedit dolor aut molestiae. Velit neque vitae eos quis neque sit. Corporis est sapiente qui repellendus placeat laboriosam ipsa nam. Ad dolore velit est sed eius repellendus ex cupiditate iste. Quis non dolorem nam. Dolores non nihil praesentium aliquid quae rerum labore.",
          total_replies: 10,
          user: {
            id: 8,
            name: "Yago Moreira",
            email: "Rafaela79@yahoo.com",
            created_at: 1564402020814,
          },
          created_at: 1564372020816,
        },
        {
          id: 12,
          title: "molestias corporis deleniti",
          slug: "molestias-corporis-deleniti-12",
          body:
            "Est et id soluta animi ad voluptatum est autem. Provident quod incidunt. Sit saepe officiis veritatis est assumenda eos eos. Molestias sit qui inventore molestiae illum tempore enim cumque. Et aut et molestiae qui.",
          total_replies: 6,
          user: {
            id: 9,
            name: "Alessandro Souza",
            email: "Marcela_Macedo@gmail.com",
            created_at: 1564417020814,
          },
          created_at: 1564387020816,
        },
        {
          id: 13,
          title: "adipisci sit architecto",
          slug: "adipisci-sit-architecto-13",
          body:
            "Aliquam autem ab id mollitia suscipit. Ab autem amet aspernatur et excepturi. Temporibus tenetur ullam quo a distinctio accusamus velit totam.",
          total_replies: 9,
          user: {
            id: 8,
            name: "Yago Moreira",
            email: "Rafaela79@yahoo.com",
            created_at: 1564402020814,
          },
          created_at: 1564402020816,
        },
        {
          id: 14,
          title: "mollitia laboriosam aut",
          slug: "mollitia-laboriosam-aut-14",
          body:
            "Provident qui repellendus. Quae aut temporibus sed quas enim. Voluptas unde nihil sint. Illum consectetur delectus. Sit eum molestiae voluptatem. Aut qui laborum.",
          total_replies: 6,
          user: {
            id: 2,
            name: "Breno Batista",
            email: "Gustavo_Moreira2@gmail.com",
            created_at: 1564312020814,
          },
          created_at: 1564417020816,
        },
        {
          id: 15,
          title: "nihil sint dignissimos harum ea eligendi quo",
          slug: "nihil-sint-dignissimos-harum-ea-eligendi-quo-15",
          body:
            "Debitis dolorem est vero ex expedita cupiditate magnam numquam. Quia tenetur eius optio nobis odit. Et commodi esse consequatur architecto blanditiis quidem. Qui similique vel sunt omnis nisi voluptas. Voluptatum quisquam tempore et sequi aut accusantium.",
          total_replies: 0,
          user: {
            id: 3,
            name: "Carla Melo",
            email: "Sara_Saraiva@yahoo.com",
            created_at: 1564327020814,
          },
          created_at: 1564432020816,
        },
      ],
    };
  },

  show(ctx, slug) {
    const thread = "quaerat-praesentium-odio-neque-aspernatur-1" === slug;
    // const thread = DB.threads.find((thread) => thread.slug === slug);

    if (!thread) {
      return ctx.throw("Thread not found", 404);
    }

    // const replies = DB.replies.filter(
    //   ({ thread_id }) => thread_id === thread.id
    // );

    ctx.body = {
      data: {
        id: 1,
        title: "quaerat praesentium odio neque aspernatur",
        slug: "quaerat-praesentium-odio-neque-aspernatur-1",
        body:
          "Et blanditiis eos est. Eaque blanditiis minima totam. Ad expedita quia modi libero quos distinctio accusantium excepturi. Iure totam numquam suscipit aperiam id nulla saepe.",
        total_replies: 10,
        user: {
          id: 5,
          name: "César Carvalho",
          email: "Ricardo33@yahoo.com",
          created_at: 1564357020814,
        },
        created_at: 1564222020815,
        replies: [
          {
            id: 1,
            thread_id: 1,
            user: {
              id: 2,
              name: "Breno Batista",
              email: "Gustavo_Moreira2@gmail.com",
              created_at: 1564312020814,
            },
            body:
              "Adipisci non nesciunt quaerat tempora aut rerum. Odio deleniti modi et corrupti fugit sequi veritatis voluptatem. Ipsum illo libero placeat quo error quo rerum et accusamus. Quod est laborum qui. Dolore voluptas a odio facere.",
            created_at: 1562842020816,
          },
          {
            id: 20,
            thread_id: 1,
            user: {
              id: 8,
              name: "Yago Moreira",
              email: "Rafaela79@yahoo.com",
              created_at: 1564402020814,
            },
            body:
              "Reprehenderit vitae qui quae. Reprehenderit excepturi voluptate velit ut quod vero. Dolor totam nam ut. Voluptates reprehenderit qui temporibus est ipsa modi ut. Necessitatibus tempora qui minus inventore dicta quasi aliquid error.",
            created_at: 1563127020817,
          },
          {
            id: 29,
            thread_id: 1,
            user: {
              id: 6,
              name: "Júlio César Costa",
              email: "Slvia_Carvalho51@gmail.com",
              created_at: 1564372020814,
            },
            body:
              "Quia amet ratione maiores sequi corrupti alias qui accusamus. Eos ad sint iste. Ea qui aut.",
            created_at: 1563262020818,
          },
          {
            id: 41,
            thread_id: 1,
            user: {
              id: 5,
              name: "César Carvalho",
              email: "Ricardo33@yahoo.com",
              created_at: 1564357020814,
            },
            body:
              "Quisquam enim reiciendis veniam dolore iste eaque. Iste qui dolorum hic aut rem voluptatum. Sunt architecto nemo amet officia est quae quisquam labore. Quis voluptas nisi vero quo illum temporibus debitis ipsum fugiat. Aut aut minus.",
            created_at: 1563442020819,
          },
          {
            id: 69,
            thread_id: 1,
            user: {
              id: 3,
              name: "Carla Melo",
              email: "Sara_Saraiva@yahoo.com",
              created_at: 1564327020814,
            },
            body:
              "Voluptates eius aspernatur maxime maxime voluptatem doloremque voluptas accusantium. Quis accusamus est error repellat ipsam delectus libero soluta unde. Atque sequi praesentium vel. Maiores sequi modi natus architecto maiores facere sint non libero.",
            created_at: 1563862020824,
          },
          {
            id: 90,
            thread_id: 1,
            user: {
              id: 9,
              name: "Alessandro Souza",
              email: "Marcela_Macedo@gmail.com",
              created_at: 1564417020814,
            },
            body:
              "Necessitatibus quis nisi non tempora quis quisquam error amet dolorum. Ipsa consequatur ab vel vitae illum labore pariatur nisi. Temporibus ut similique aut natus nobis ipsam molestiae repudiandae dolores.",
            created_at: 1564177020827,
          },
          {
            id: 101,
            thread_id: 1,
            user: {
              id: 1,
              name: "Dalila Carvalho",
              email: "Marli.Franco@bol.com.br",
              created_at: 1564297020814,
            },
            body:
              "Saepe eius qui atque voluptate. Error esse ex. Fugiat suscipit perspiciatis. Minima eos qui consequuntur voluptatem natus ab aut quo velit. Voluptas odio repudiandae quis molestiae ut voluptatem sint laborum dolores.",
            created_at: 1564342020829,
          },
          {
            id: 102,
            thread_id: 1,
            user: {
              id: 9,
              name: "Alessandro Souza",
              email: "Marcela_Macedo@gmail.com",
              created_at: 1564417020814,
            },
            body:
              "Aut molestiae nam quibusdam corrupti amet quibusdam ab quod qui. Aut esse illum totam necessitatibus aliquam. Ut autem fuga reiciendis labore quae quia. Inventore explicabo corrupti in libero ut sed.",
            created_at: 1564357020829,
          },
          {
            id: 104,
            thread_id: 1,
            user: {
              id: 2,
              name: "Breno Batista",
              email: "Gustavo_Moreira2@gmail.com",
              created_at: 1564312020814,
            },
            body:
              "Voluptatem reprehenderit culpa error quasi quos rerum iure esse. Et aut necessitatibus qui nihil ut non aspernatur quia ipsa. Ipsa consectetur ut. Qui sunt quia ducimus soluta.",
            created_at: 1564387020829,
          },
          {
            id: 106,
            thread_id: 1,
            user: {
              id: 1,
              name: "Dalila Carvalho",
              email: "Marli.Franco@bol.com.br",
              created_at: 1564297020814,
            },
            body:
              "Quaerat sint reiciendis inventore in eaque amet iste molestias. Velit ea quasi id est ea. Dolorem ut praesentium eum esse. Dicta voluptatum magni vel laboriosam. Quas quia provident consectetur consequatur sit quo ipsum similique. Itaque quaerat labore veritatis nisi dolore consequatur dolorum aspernatur.",
            created_at: 1564417020830,
          },
        ],
      },
    };
    ctx.status = 200;
  },
};

app.use(_.get("/api/threads", threads.index));
app.use(_.get("/api/threads/:slug", threads.show));

app.listen(process.env.API_PORT);

console.log("API is ready!");