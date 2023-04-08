<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class ConcertCreateType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {

        $builder
            ->add('datel', DateType::class, [
                'label' => 'Choisissez une date',
                'attr' => ['id' => 'daterange', 'class' => 'containerForm'],
                'format' => 'dd MM yyyy',
                'data' => new \DateTime()
            ])
            ->add('artists', ChoiceType::class, [
                'label' => 'Pour quel artiste ?',
                'choices' => $options['artists'],
                'choice_label' => 'name',
                'attr' => ['class' => 'containerForm'],
                'expanded' => false,
                'multiple' => false,
            ])
            ->add('citys', ChoiceType::class, [
                'label' => 'Pour quelle ville ?',
                'choices' => $options['citys'],
                'choice_label' => 'name',
                'attr' => ['class' => 'containerForm'],
                'expanded' => false,
                'multiple' => false,
            ])
            ->add('goCreate', SubmitType::class, [
                'label' => 'Enregister',
                'attr' => ['class' => 'containerButton']
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            $resolver->setRequired(['artists', 'citys'])
        ]);
    }
}
