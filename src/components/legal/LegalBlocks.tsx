import type { LegalBlock } from '@/data/legal';

/**
 * Renders extracted content blocks. `html` holds only the inline markup the
 * source used — links, <strong>, <em>, <br> — after the extractor stripped
 * every attribute except a rewritten href, so it is safe to inject.
 */
export default function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
    return (
        <>
            {blocks.map((block, i) => {
                if (block.type === 'list') {
                    const ListTag = block.ordered ? 'ol' : 'ul';
                    return (
                        <ListTag
                            key={i}
                            className={`mt-5 space-y-3 ${
                                block.ordered ? 'list-decimal' : 'list-disc'
                            } pl-5 marker:text-primary-light`}
                        >
                            {block.items.map((item, j) => (
                                <li
                                    key={j}
                                    className="pl-1.5 text-[1.0625rem] leading-[1.75] text-text-secondary [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_strong]:font-bold [&_strong]:text-primary-dark"
                                    dangerouslySetInnerHTML={{ __html: item }}
                                />
                            ))}
                        </ListTag>
                    );
                }

                if (block.type === 'heading') {
                    return (
                        <h3
                            key={i}
                            className="mt-8 text-lg font-extrabold text-primary-dark"
                            dangerouslySetInnerHTML={{ __html: block.html }}
                        />
                    );
                }

                return (
                    <p
                        key={i}
                        className="mt-5 text-[1.0625rem] leading-[1.75] text-text-secondary first:mt-0 [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary-dark [&_strong]:font-bold [&_strong]:text-primary-dark"
                        dangerouslySetInnerHTML={{ __html: block.html }}
                    />
                );
            })}
        </>
    );
}
