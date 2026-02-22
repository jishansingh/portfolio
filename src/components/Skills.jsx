import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaJsSquare,
  FaDocker,
  FaAws,
  FaDatabase,
  FaReact,
  FaGoogle,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiApachekafka,
  SiRabbitmq,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiElasticsearch,
  SiDjango,
  SiGo,
  SiCplusplus,
  SiC,
  SiHibernate,
  SiApachecassandra,
  SiGooglecloud,
} from "react-icons/si";
import { portfolioData } from "../data/portfolioData";

const { skills } = portfolioData;

const iconMap = {
  Java: FaJava,
  Go: SiGo,
  Python: FaPython,
  JavaScript: FaJsSquare,
  C: SiC,
  "C++": SiCplusplus,
  "Spring Boot": SiSpringboot,
  Django: SiDjango,
  React: FaReact,
  Hibernate: SiHibernate,
  Docker: FaDocker,
  AWS: FaAws,
  GCP: SiGooglecloud,
  "Apache Kafka": SiApachekafka,
  RabbitMQ: SiRabbitmq,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Redis: SiRedis,
  Elasticsearch: SiElasticsearch,
  Cassandra: SiApachecassandra,
};

const categories = [
  { title: "Languages", items: skills.languages, color: "from-blue-500 to-cyan-500" },
  { title: "Frameworks", items: skills.frameworks, color: "from-green-500 to-emerald-500" },
  { title: "Cloud & Tools", items: skills.tools, color: "from-orange-500 to-amber-500" },
  { title: "Databases", items: skills.databases, color: "from-purple-500 to-pink-500" },
];

function SkillChip({ name, index }) {
  const Icon = iconMap[name];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 border border-gray-100 dark:border-gray-700"
    >
      {Icon && (
        <Icon className="text-primary dark:text-primary-light text-lg flex-shrink-0" />
      )}
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-surface-dark-alt"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Technical{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-surface-dark shadow-md"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-1 h-8 rounded-full bg-gradient-to-b ${cat.color}`}
                />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((skill, i) => (
                  <SkillChip key={skill} name={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
