# SEO, GEO e publicação

## O que foi implementado

- Título da página com nome, tráfego pago, Meta Ads e Google Ads.
- H1 simples sobre anúncios e sites, com explicações de todos os serviços na abertura e nos blocos seguintes.
- Quatro seções de serviços identificáveis, com explicações e links para contato.
- Google Meu Negócio também identificado como Perfil da Empresa no Google.
- Dez perguntas frequentes com respostas objetivas em HTML nativo, disponíveis sem JavaScript e acessíveis por teclado.
- JSON-LD: Person, WebSite, WebPage, quatro Service e FAQPage. As respostas do schema correspondem às respostas visíveis.
- Ligação da identidade profissional ao Instagram informado.
- Canonical de cada página, og:url, og:site_name, títulos e descrições.
- robots.txt permite rastreamento; sitemap.xml lista as duas páginas com URLs absolutas.
- Recursos locais, sem fontes externas, bibliotecas ou scripts de rastreamento. Motion respeita redução de movimento.

GEO significa aqui facilitar a compreensão e a recuperação do conteúdo por mecanismos de busca com IA: respostas explícitas, identidade consistente, serviços bem descritos e conteúdo rastreável. Não existe garantia de citação, indexação ou posição. O Google não exige um schema especial nem arquivo llms.txt para essas experiências.

A documentação do Google informa que resultados enriquecidos de FAQ deixaram de ser exibidos a partir de 7 de maio de 2026. FAQPage foi mantido como descrição semântica das perguntas visíveis, não como promessa de destaque na busca. Person e Service também não garantem um resultado enriquecido próprio.

## Antes de enviar ao GitHub

1. Confirme que sua conta pode publicar em raquelfatimaads.github.io. O endereço foi escolhido pela usuária, mas não foi publicado nem teve disponibilidade confirmada nesta tarefa.
2. Preencha todos os [PREENCHER:...] na página inicial e na privacidade. Finalize as práticas reais do aplicativo antes de divulgar a política.
3. Confirme os serviços e o procedimento comercial descritos no FAQ. Ajustes nas respostas visíveis devem ser repetidos no JSON-LD dentro de index.html.
4. Inclua região de atendimento somente quando confirmada, tanto em texto visível quanto em areaServed nos serviços. Não foi presumida nenhuma cidade nem atendimento nacional.
5. Envie todos os arquivos do site, incluindo robots.txt, sitemap.xml, assets e .nojekyll, diretamente para a raiz do repositório. Não envie o ZIP como se fosse o site.

## Depois de publicar

1. Confira que a home e privacy.html abrem em HTTPS, sem login, e que sitemap.xml e robots.txt abrem no endereço final.
2. No Google Search Console, adicione uma propriedade de prefixo de URL com https://raquelfatimaads.github.io/. Use uma forma de verificação disponibilizada, como meta tag ou arquivo HTML. Não há código de verificação fictício no site.
3. Envie sitemap.xml pela seção Sitemaps. Use Inspeção de URL para testar a home e solicitar indexação. O pedido não garante inclusão.
4. Valide o JSON-LD no Schema Markup Validator. Use também o Rich Results Test para os recursos que o Google efetivamente suporta. Uma mensagem de ausência de resultados enriquecidos não significa, sozinha, que Person ou Service são inválidos.
5. Teste a URL publicada no PageSpeed Insights. Não foi atribuída uma nota de desempenho fictícia nem medida a performance de uma publicação inexistente.
6. Acompanhe consultas, impressões e cliques no Search Console. Compare períodos e observe quais serviços geram interesse antes de decidir novos conteúdos.
7. Vincule o endereço ao Instagram. Se tiver um Perfil da Empresa elegível e verificado, mantenha nome, contato e informações coerentes. Não crie uma localização física que não exista.

## Próximos conteúdos que dependem de informações reais

- Região de atendimento e modalidade presencial/remota.
- Exemplos de projetos autorizados, com contexto e resultados verificáveis.
- Experiência, qualificações e ferramentas realmente utilizadas.
- Páginas próprias por serviço quando houver conteúdo específico suficiente: escopo, processo, dúvidas e exemplos reais. Evitar páginas repetidas apenas trocando cidades ou palavras-chave.

## Referências oficiais consultadas em 19/10/2026

- SEO: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Busca com IA: https://developers.google.com/search/docs/appearance/ai-features
- Atualizações e descontinuação do FAQ enriquecido: https://developers.google.com/search/updates
- Regras de dados estruturados: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Tipos de serviço: https://schema.org/Service
- Nome do site: https://developers.google.com/search/docs/appearance/site-names
- Sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- GitHub Pages: https://docs.github.com/en/pages/quickstart

As referências locais sincronizadas deste projeto estavam vazias. Não foi possível recuperar um material específico de SEO da Real Odonto; esta implementação segue os pedidos explícitos da usuária e as fontes oficiais acima.
