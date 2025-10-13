![Alt text](../images/complete-logo.png "a title")
# 🍜 Welcome to Elara

**Elara** is a personal project turned into a professional-grade solution — an application designed to simplify and optimize operations in **restaurants, gastrobars, and restobars**. Built with passion by a **Systems Engineering student and software development enthusiast** ([@julianbetov](https://github.com/julianbetov)), Elara combines practical business logic with clean backend architecture.

---

## 🍚 What Elara Does

> All-in-one system to help modern food businesses manage their backend operations with clarity and control.

Elara  allows for efficient management of users and roles, inventory and stock levels, product catalogs with variants, recipe creation based on ingredients, and order tracking. Additionally, it provides tools for logging business activities and monitoring financial data, including income and expenses — offering full visibility and control over daily operations.

---

## 👩‍🚀 Our Progress
> Note: This section is constantly improving, stay tuned for new things we're working on.

> (List of repositories that make Elera possible)
<!-- COMMITS-TABLE:START -->
| Repository | Branch | Commit | Date (UTC) | Message | Author |
| --- | --- | --- | --- | --- | --- |
| [demo-repository](https://github.com/elara-app/demo-repository) | `test-branch` | [6bc3cad](https://github.com/elara-app/demo-repository/commit/6bc3cad5532e9f2caeda50d80fc76ebd09af0feb) | 6/14/2025, 8:45:23 PM | New commit | [julianbetov](https://github.com/julianbetov) |
| [inventory-service](https://github.com/elara-app/inventory-service) | `develop` | [e66403d](https://github.com/elara-app/inventory-service/commit/e66403de9211dde2befd2618c47c7e3200efe18b) | 10/6/2025, 4:39:10 PM | Merge pull request #42 from elara-app/feature/message-broker-setup  feat(dependencies): add spring-cloud-starter-bus-amqp for message bro… | [julianbetov](https://github.com/julianbetov) |
| [.github](https://github.com/elara-app/.github) | `main` | [591e6c4](https://github.com/elara-app/.github/commit/591e6c4976ecb9e9b9b575ef7fc9d865572733f6) | 10/13/2025, 8:09:51 PM | Update commits table in README | [readme-updater-from-elara[bot]](https://github.com/apps/readme-updater-from-elara) |
| [validations-test](https://github.com/elara-app/validations-test) | `main` | [32a7d4f](https://github.com/elara-app/validations-test/commit/32a7d4f7afdb2805267a6345143881f6962f6350) | 7/5/2025, 5:46:27 PM | Merge pull request #31 from elara-app/hotfix/give-package-permissions-to-ci-shared-workflow-from-release  Grant package write permissions to CI shared workflow from release | [julianbetov](https://github.com/julianbetov) |
| [unit-of-measure-service](https://github.com/elara-app/unit-of-measure-service) | `feature/refactor-code` | [67bae7d](https://github.com/elara-app/unit-of-measure-service/commit/67bae7dea1515c2bb8db507af1bb8ff02a5c07e1) | 10/13/2025, 5:30:28 PM | refactor(tests): update UomStatusControllerTest and UomStatusServiceImpTest to use new endpoint paths | [julianbetov](https://github.com/julianbetov) |
| [config-service](https://github.com/elara-app/config-service) | `develop` | [efbb1b2](https://github.com/elara-app/config-service/commit/efbb1b237ee3c86f977ac6dadd8b267df60c89a5) | 10/7/2025, 1:31:22 PM | Merge pull request #4 from elara-app/feature/first-release  chore(pom): update version to 1.0 | [julianbetov](https://github.com/julianbetov) |
| [discovery-service](https://github.com/elara-app/discovery-service) | `main` | [8d1ebaf](https://github.com/elara-app/discovery-service/commit/8d1ebafca6feee5b7779d9b4df532c0f3338910d) | 9/30/2025, 7:05:05 PM | Merge pull request #3 from elara-app/develop  Develop | [julianbetov](https://github.com/julianbetov) |
| [centralized-configuration](https://github.com/elara-app/centralized-configuration) | `main` | [41361a4](https://github.com/elara-app/centralized-configuration/commit/41361a4f50fc6adb64a3c65b4880ffc661f15276) | 10/6/2025, 6:21:00 PM | Add management and logging configuration to API gateway | [julianbetov](https://github.com/julianbetov) |
| [api-gateway](https://github.com/elara-app/api-gateway) | `develop` | [fbfb195](https://github.com/elara-app/api-gateway/commit/fbfb195bcb911021ffd0a5b502da3e768b68c3a5) | 10/6/2025, 5:09:41 PM | Merge pull request #1 from elara-app/feature/pom-organization  build(pom): enhance project setup with metadata and refine dependencies | [julianbetov](https://github.com/julianbetov) |

_Last updated: 10/13/2025, 9:01:00 PM_
<!-- COMMITS-TABLE:END -->
---

## 🔨 How are we creating Elara?
- The table above is a production-ready automation tool for keeping a section of a GitHub organization's README synchronized with the live repository's data, using modern Node.js, the GitHub API, and software engineering best practices. [See code here](https://github.com/elara-app/.github/tree/main/src). 
    
    **Key points:**
    - Separation of concerns y modularity.
    - professional GitHub App authentication (Uses GitHub App installation authentication, not a personal token).
    - Dynamic Data Fetching.
    - Markdown Table Rendering.
    - Safe, targeted README updates.
    - Direct GitHub integration.
    - Robust logging & Error handling.

### 🧑‍💻 Development of other services
The Elara's backend is developed with a decoupled **microservices architecture**, each with its own **PostgreSQL database**, asynchronous communication via **Kafka** or **RabbitMQ**, centralized configuration with **Spring Cloud Config Server**, and exposure through an **API Gateway**. It is containerized with **Docker**, orchestrated with **Kubernetes**, and automated with **GitHub Actions** under a **Git Flow**, enabling **professional CI/CD**, **horizontal scalability**, and **cloud deployment** (AWS, Azure, or GCP). It includes **OAuth2 and JWT authentication**, robust validations, centralized error handling, structured logging, and automatic documentation with **Swagger**. And more.

Its design allows it to support **high traffic**, **guarantee security** and **availability**, and facilitate **system maintenance** and **evolution**. It is ideal for medium-sized or large companies that need a solid, scalable, production-ready foundation, or for startups looking for a modern architecture ready to grow without rewriting from scratch.

> Note: This document currently shows the entire development process of the elara application (we are still working on it): [Creating Elara App - Development Software](https://docs.google.com/document/d/1eJTg3-qAXy3PJtfzBTZdcgy597JHPAEZ2ok6tBuj8Co/edit?usp=sharing)